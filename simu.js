$(document).ready(function(){

		var tipo = localStorage.getItem("tipoMaquina");
		var qtdEst = localStorage.getItem("qtdEst");
		var vetorTop = localStorage.getItem("vetTop");
		tipo = 1;

		var bpos = [0, Math.PI/4, Math.PI/2, 3*Math.PI/4, Math.PI, 5*Math.PI/4, 6*Math.PI/4, 7*Math.PI/4];
		var hcan = $(window).height()-4-170;
		if(hcan < 450){
			hcan = 450;
		}
		var h2can = hcan - 0.2*hcan;
		var wcan = $(window).width();
		if(wcan < (((Math.sin(bpos[2])*h2can)-(Math.cos(bpos[4])*wcan))/((Math.sin(bpos[2]))-(Math.sin(bpos[6])))-((Math.sin(bpos[6])*h2can)-(Math.cos(bpos[4])*wcan))/((Math.sin(bpos[2]))-(Math.sin(bpos[6])))+80)){
			wcan = (((Math.sin(bpos[2])*h2can)-(Math.cos(bpos[4])*wcan))/((Math.sin(bpos[2]))-(Math.sin(bpos[6])))-((Math.sin(bpos[6])*h2can)-(Math.cos(bpos[4])*wcan))/((Math.sin(bpos[2]))-(Math.sin(bpos[6])))+85);
		}
		var ctx = document.querySelector('canvas').getContext('2d');
		ctx.canvas.width = wcan;
		ctx.canvas.height = hcan;
		ctx.font = "20px Arial";

		var qest = 8;
		if(qest == 1){
			alert("Operação Inválida");
			window.stop();
		}
		var est = [0,0,0,0,0,0,0,0];
		var proc = [1,1,2,1, 2,0,3,1, 3,1,2,1, 1,0,1,1, 3,0,3,1, 3,0,1,1];

		if(qest == 3 | qest == 5 | qest == 8)
			if(qest == 3 | qest == 8)
				est[0] = randomCircle(ctx,'#a80000', mX(bpos[0]), mY(bpos[0]),40);
			else
				est[0] = randomCircle(ctx,'#999', ((Math.sin(bpos[0])*h2can)-(Math.cos(bpos[4])*wcan))/((Math.sin(bpos[2]))-(Math.sin(bpos[6]))), (hcan+(((Math.cos(bpos[0])*h2can)+(Math.sin(bpos[2])*hcan))/((Math.cos(bpos[4]))-(Math.cos(bpos[0]))))),40);
		if(qest == 4 | qest == 6 | qest == 7 | qest == 8)
			est[1] = randomCircle(ctx,'#999', ((Math.sin(bpos[1])*h2can)-(Math.cos(bpos[4])*wcan))/((Math.sin(bpos[2]))-(Math.sin(bpos[6]))), (hcan+(((Math.cos(bpos[1])*h2can)+(Math.sin(bpos[2])*hcan))/((Math.cos(bpos[4]))-(Math.cos(bpos[0]))))),40);
		if(qest == 2 | qest == 5 | qest == 6 | qest == 7 | qest == 8)
			est[2] = randomCircle(ctx,'#999', ((Math.sin(bpos[2])*h2can)-(Math.cos(bpos[4])*wcan))/((Math.sin(bpos[2]))-(Math.sin(bpos[6]))), (hcan+(((Math.cos(bpos[2])*h2can)+(Math.sin(bpos[2])*hcan))/((Math.cos(bpos[4]))-(Math.cos(bpos[0]))))),40);
		if(qest == 3 | qest == 4 | qest == 6 | qest == 7 | qest == 8)
			est[3] = randomCircle(ctx,'#999', ((Math.sin(bpos[3])*h2can)-(Math.cos(bpos[4])*wcan))/((Math.sin(bpos[2]))-(Math.sin(bpos[6]))), (hcan+(((Math.cos(bpos[3])*h2can)+(Math.sin(bpos[2])*hcan))/((Math.cos(bpos[4]))-(Math.cos(bpos[0]))))),40);
		if(qest == 5 | qest == 7 | qest == 8)
			est[4] = randomCircle(ctx,'#999', ((Math.sin(bpos[4])*h2can)-(Math.cos(bpos[4])*wcan))/((Math.sin(bpos[2]))-(Math.sin(bpos[6]))), (hcan+(((Math.cos(bpos[4])*h2can)+(Math.sin(bpos[2])*hcan))/((Math.cos(bpos[4]))-(Math.cos(bpos[0]))))),40);
		if(qest == 3 | qest == 4 | qest == 6 | qest == 7 | qest == 8)
			est[5] = randomCircle(ctx,'#999', ((Math.sin(bpos[5])*h2can)-(Math.cos(bpos[4])*wcan))/((Math.sin(bpos[2]))-(Math.sin(bpos[6]))), (hcan+(((Math.cos(bpos[5])*h2can)+(Math.sin(bpos[2])*hcan))/((Math.cos(bpos[4]))-(Math.cos(bpos[0]))))),40);
		if(qest == 2 | qest == 5 | qest == 6 | qest == 7 | qest == 8)
			if(qest == 2)
				est[6] = randomCircle(ctx,'#a80000', ((Math.sin(bpos[6])*h2can)-(Math.cos(bpos[4])*wcan))/((Math.sin(bpos[2]))-(Math.sin(bpos[6]))), (hcan+(((Math.cos(bpos[6])*h2can)+(Math.sin(bpos[2])*hcan))/((Math.cos(bpos[4]))-(Math.cos(bpos[0]))))),40);
			else
				est[6] = randomCircle(ctx,'#999', ((Math.sin(bpos[6])*h2can)-(Math.cos(bpos[4])*wcan))/((Math.sin(bpos[2]))-(Math.sin(bpos[6]))), (hcan+(((Math.cos(bpos[6])*h2can)+(Math.sin(bpos[2])*hcan))/((Math.cos(bpos[4]))-(Math.cos(bpos[0]))))),40);
		if(qest == 4 | qest == 5 | qest == 6 | qest == 7 | qest == 8)
			if(qest == 4 | qest == 5 | qest == 6 | qest == 7)
				est[7] = randomCircle(ctx,'#a80000', ((Math.sin(bpos[7])*h2can)-(Math.cos(bpos[4])*wcan))/((Math.sin(bpos[2]))-(Math.sin(bpos[6]))), (hcan+(((Math.cos(bpos[7])*h2can)+(Math.sin(bpos[2])*hcan))/((Math.cos(bpos[4]))-(Math.cos(bpos[0]))))),40);
			else
				est[7] = randomCircle(ctx,'#999', ((Math.sin(bpos[7])*h2can)-(Math.cos(bpos[4])*wcan))/((Math.sin(bpos[2]))-(Math.sin(bpos[6]))), (hcan+(((Math.cos(bpos[7])*h2can)+(Math.sin(bpos[2])*hcan))/((Math.cos(bpos[4]))-(Math.cos(bpos[0]))))),40);

		ctx.lineWidth = 2;
		ctx.fillStyle = ctx.strokeStyle = '#5ba4ba';
		if(qest == 2){
			est[6].y -= 10;
			est[2].y -= 10;
			arrow(ctx,est[2],est[6],10,1);
			est[6].y += 20;
			est[2].y += 20;
			arrow(ctx,est[6],est[2],10,1);
			est[6].y -= 10;
			est[2].y -= 10;
		}
		if(qest == 3){
			var i = 0;
			var nproc = proc.slice(0);
			for(i = 0; i < proc.length; i += 2){
				if(proc[i] == 1)
					proc[i] = 0;
				else if(proc[i] == 2)
					proc[i] = 3;
				else if(proc[i] == 3)
					proc[i] = 5;
			}
			for(i = 0; i < proc.length; i += 4){
				ctx.fillStyle  = '#000';
				ctx.fillText(""+nproc[i],est[proc[i]].x-5,est[proc[i]].y-5);
				if(tipo){
					ctx.fillText("___",est[proc[i]].x-15,est[proc[i]].y-1);
					ctx.fillText(""+nproc[i+3],est[proc[i]].x-5,est[proc[i]].y+22);
				}
				ctx.fillStyle  = '#5ba4ba';
			}
			for(i = 0; i < proc.length; i += 4){
				if(proc[i] == proc[i+2]){
					//alert(proc[i]+" "+proc[i+2]);
					var a = randomCircle(ctx,'#fff', est[proc[i]].x-30, est[proc[i]].y-60,1);
					var b = randomCircle(ctx,'#fff', est[proc[i]].x+30, est[proc[i]].y-60,1);
					arrow(ctx,a,est[proc[i]],10,0);
					arrow(ctx,a,b,10,0);
					arrow(ctx,b,est[proc[i]],10,1);
				}
				else
					arrow(ctx,est[proc[i]],est[proc[i+2]],10,1);
			}
		}
		if(qest == 8){
			arrow(ctx,est[0],est[1],10,1);
			arrow(ctx,est[0],est[2],10,1);
			arrow(ctx,est[0],est[3],10,1);
			arrow(ctx,est[0],est[4],10,1);
			arrow(ctx,est[0],est[5],10,1);
			arrow(ctx,est[0],est[6],10,1);
			arrow(ctx,est[0],est[7],10,1);
			arrow(ctx,est[1],est[2],10,1);
			arrow(ctx,est[1],est[3],10,1);
			arrow(ctx,est[1],est[4],10,1);
			arrow(ctx,est[1],est[5],10,1);
			arrow(ctx,est[1],est[6],10,1);
			arrow(ctx,est[1],est[7],10,1);
			arrow(ctx,est[2],est[3],10,1);
			arrow(ctx,est[2],est[4],10,1);
			arrow(ctx,est[2],est[5],10,1);
			arrow(ctx,est[2],est[6],10,1);
			arrow(ctx,est[2],est[7],10,1);
			arrow(ctx,est[3],est[4],10,1);
			arrow(ctx,est[3],est[5],10,1);
			arrow(ctx,est[3],est[6],10,1);
			arrow(ctx,est[3],est[7],10,1);
			arrow(ctx,est[4],est[5],10,1);
			arrow(ctx,est[4],est[6],10,1);
			arrow(ctx,est[4],est[7],10,1);
			arrow(ctx,est[5],est[6],10,1);
			arrow(ctx,est[5],est[7],10,1);
			arrow(ctx,est[6],est[7],10,1);
		}
		function arrow(ctx,p1,p2,size,aw){
			ctx.save();

			var points = edges(ctx,p1,p2);
			if (points.length < 2) return 
				p1 = points[0], p2=points[points.length-1];

			// Rotate the context to point along the path
			var dx = p2.x-p1.x, dy=p2.y-p1.y, len=Math.sqrt(dx*dx+dy*dy);
			ctx.translate(p2.x,p2.y);
			ctx.rotate(Math.atan2(dy,dx));

			// line
			ctx.lineCap = 'round';
			ctx.beginPath();
			ctx.moveTo(0,0);
			ctx.lineTo(-len,0);
			ctx.closePath();
			ctx.stroke();

			if(aw == 1){
				// arrowhead
				ctx.beginPath();
				ctx.moveTo(0,0);
				ctx.lineTo(-size,-size);
				ctx.lineTo(-size, size);
				ctx.closePath();
				ctx.fill();
			}
			ctx.restore();
		}

		// Find all transparent/opaque transitions between two points
		// Uses http://en.wikipedia.org/wiki/Bresenham's_line_algorithm
		function edges(ctx,p1,p2,cutoff){
			if (!cutoff) cutoff = 220; // alpha threshold
			var dx = Math.abs(p2.x - p1.x), dy = Math.abs(p2.y - p1.y),
			    sx = p2.x > p1.x ? 1 : -1,sy = p2.y > p1.y ? 1 : -1;
			var x0 = Math.min(p1.x,p2.x), y0=Math.min(p1.y,p2.y);
			var pixels = ctx.getImageData(x0,y0,dx+1,dy+1).data;
			var hits=[], over=null;
			for (x=p1.x,y=p1.y,e=dx-dy; x!=p2.x||y!=p2.y;){
				var alpha = pixels[((y-y0)*(dx+1)+x-x0)*4 + 3];
				if (over!=null && (over ? alpha<cutoff : alpha>=cutoff)){
					hits.push({x:x,y:y});
				}
				var e2 = 2*e;
				if (e2 > -dy){ e-=dy; x+=sx}
				if (e2 < dx){ e+=dx; y+=sy}
				over = alpha>=cutoff;
			}
			return hits;
		}

		function randomCircle(ctx,color, x1, y1, r){
			var x = Math.round(x1), y = Math.round(y1);
			ctx.save();
			ctx.beginPath();
			ctx.arc(x, y, r, 0, Math.PI * 2, false);
			ctx.fillStyle = color;
			ctx.fill();
			ctx.lineWidth = 2;
			ctx.stroke();
			ctx.restore();
			return {x:x,y:y};
		}

		function mY(k){
			return (hcan+(((Math.cos(k)*h2can)+(Math.sin(bpos[2])*hcan))/((Math.cos(bpos[4]))-(Math.cos(bpos[0])))));
		}
		function mX(k){
			return (((Math.sin(k)*h2can)-(Math.cos(bpos[4])*wcan))/((Math.sin(bpos[2]))-(Math.sin(bpos[6]))));
		}

		window.location.reload(true);

});
