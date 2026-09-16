#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath, pathToFileURL } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, '..');

async function main() {
	const ssrEntry = path.join(root, 'dist-server', 'entry-server.js');
	const { render } = await import(pathToFileURL(ssrEntry).href);
	const { html, helmet } = render();

	const indexPath = path.join(root, 'dist', 'index.html');
	let template = fs.readFileSync(indexPath, 'utf8');

	const headTags = [helmet.title, helmet.meta, helmet.link, helmet.script]
		.map((tag) => tag.toString())
		.filter(Boolean)
		.join('\n\t\t');

	template = template
		.replace('<!--app-head-->', headTags)
		.replace('<!--app-html-->', html);

	fs.writeFileSync(indexPath, template, 'utf8');
	fs.rmSync(path.join(root, 'dist-server'), { recursive: true, force: true });

	console.log('✓ Prerendered dist/index.html');
}

main().catch((error) => {
	console.error('❌ Prerender failed:', error);
	process.exit(1);
});
