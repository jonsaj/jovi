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
var count = 35;


router.get('/', function(req, res) {
		count = (count+1)%100;
		if(count !== 99){
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
