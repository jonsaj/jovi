var express = require('express');
// var request = require('request');

var router = express.Router();

// var refresh = 0;
// var reddit = [];

// function getCringes(callback){
// 	if(!refresh){
// 		var reddit = [];
// 		var headers = {
// 			'Content-Type' : 'application/json'
// 		}
// 		var options = {
// 			method: 'GET',
// 			headers: headers,
// 			uri : 'http://reddit.com/r/cringe.json'
// 		}
// 		request(options, function(error, response, body){
// 			if(!error && response.statusCode == 200){
// 				var vids = JSON.parse(body);[]
// 				if(vids.data && vids.data.children){
// 					vids = vids.data.children;
// 					for(var i in vids){
// 						if(	vids[i].data && 
// 							vids[i].data.domain &&
// 							(vids[i].data.domain.indexOf('youtube') >= 0 ) &&
// 							vids[i].data.media_embed
// 						){
// 							reddit.push(vids[i].data.media_embed);	
// 						}
// 					}
					
// 				}
// 				callback(error, reddit);
// 			}
// 			else callback(error, reddit);
// 		});		
// 	}
// 	else{
// 		callback(undefined, reddit);
// 	}
// 	refresh = (refresh +1) % 50;
// }

/* GET home page. */
var count = 90;
var win = -1;
var max = 100;
var visitors = 0;
router.get('/status', function(req, res) {
	res.render('status', { visitors:visitors,count:count,win:win,max:max } );
});

router.get('/', function(req, res) {
	visitors++;
	if(req.query.count){
		count = parseInt(req.query.count);
	}
	if(req.query.win){
		win = parseInt(req.query.win);
	}
	if(req.query.max){
		max = parseInt(req.query.max);
	}
		count = (count+1)%max;
		if(count !== win || req.query.shit){
			res.render('index.html', { title: 'Jovi Raps',
									video: "//www.youtube.com/embed/YU5DXTHA35c?autoplay=1&autohide=1&rel=0&hd=1",
									message: ""
									});
		}else{
			res.render('index.html', { title: 'Jovi Raps',
									video: "//www.youtube.com/embed/-SHrVY_lrxk?autoplay=1&autohide=1&rel=0&hd=1",
									message: "Congrats! You've unlocked Jovi's secret video!"
									});
		}
});

module.exports = router;
