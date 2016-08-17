I'm not a pro at FFmpeg. And my objective is rather narrow. I am attempting to create a simple, straight forward, approach for converting video files into web formats with moderate compression that almost anyone on my team can use.

I'm running windows, but I have a mac to test with also.


INSTALLING

Windows Installation( WORK IN PROGRESS)
1. Download a static build of ffmpeg from https://ffmpeg.zeranoe.com/builds/
2. Add the folder that contains ffmpeg.exe to your system path - http://www.computerhope.com/issues/ch000549.htm


Mac Installation(WORK IN PROGRESS)
1. Download a static build of ffmpeg from http://johnvansickle.com/ffmpeg/
2. Uncompress the .tar.xz with your preferred tool.
3. Add the folder that contains ffmpeg to your system path - http://architectryan.com/2012/10/02/add-to-the-path-on-mac-os-x-mountain-lion/#.V7RzL1UrKHs


SETUP

Both OS's Setup
1. Install Node and NPM if you don't have them already - https://docs.npmjs.com/getting-started/installing-node
2. Open Terminal and cd to this repo.
3. run `npm install`



Windows Setup Next Steps
1. Write a bash script to run `web-video-converter\vc.js`

vc.bat
```start node "C:\YOUR REPO LOCATION\web-video-converter\vc.js" %1 %2```

2. Make a folder for scripts (if you don't have one already). Mine is C:/scripts and save vc.bat inside of it
3. Add C:/scripts to your system path in the same way you did when installing.
4. Use ContextEdit (http://www.softpedia.com/get/System/OS-Enhancements/ContextEdit.shtml) to create a link to `C:/scripts/vc.bat`
5. I added a Shell command to VLC media file (.mov)
	Menu text: `Video Converter (mp4, ogv, webm)`
	Command line: `"C:\scripts\vc.bat" "-f" "%1"`


That's the gist. That way I can simply right click on a file, select "Video Converter (mp4, ogv, webm)" and it fires open a console window and starts processing the video with my presets into a folder named `exports` beside the video you clicked on.



Mac Setup Next Steps
1. Not here yet. - Here's sort of a way to start http://www.hongkiat.com/blog/customize-mac-right-click-menu/




So as you can tell, I have some work to do before this is easy for other people to implement. If there's some other tool that will simply execute what I want, that'd be better. But this works great for me on my Windows 10 machine.
