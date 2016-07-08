#!/usr/bin/env node

var MediaConverter = require("html5-media-converter");
var mkdirp = require('mkdirp');
var mc = new MediaConverter();
var program = require('commander');
var fs = require('fs');

program
  .version('0.0.1')
  .option('-f, --file [name]', 'process this file [filename]', 'default.avi')
  .option('-d, --dimensions [dims]', 'resize the output [dimensions]', '1280x720')
  .option('-t, --target [tar]', 'folder to export to [exports]', 'exports')
  .parse(process.argv);

fs.exists(program.file, function(exists) {
	if (!exists) {
		console.log(program.file + " not found. Double check it's location");
		return false;
	} else {
		makeDirectory()
	}
});

function makeDirectory() {
	mkdirp(program.target, function (err) {
		if (err) {
			console.error(err);
		} else {
			processVideo();
		}
	});
}

function processVideo(){

	console.log('You want to process a video:');
	console.log('  - filename: %s', program.file);
	console.log('  - resize to: %s', program.dimensions);
	console.log('  - export location: %s', program.target);

	mc.convert(program.file, program.dimensions, program.target, confirmComplete);
}


function confirmComplete() {
	console.log(":D");
}





/*
	command line stuff
	--quality=.3
	--resize=1280x720
	--formats=mp4,ogv,webm
	--target=exports
*/