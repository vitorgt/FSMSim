//1080min == 18h
$(document).ready(function(){

		var bpos = [0, Math.PI/4, Math.PI/2, 3*Math.PI/4, Math.PI, 5*Math.PI/4, 6*Math.PI/4, 7*Math.PI/4];
		var ctx = document.querySelector('canvas').getContext('2d');
		var tipo = parseInt(localStorage.getItem("tipoMaquina"));
		var qtdEst = localStorage.getItem("qtdEst");
		var vetorTop = localStorage.getItem("vetTop");
		var dumb = [-1,-1,-1,-1,-1,-1,-1,-1,-1], dumb2 = [-1,-1,-1,-1,-1,-1,-1,-1,-1]
		var est = [0,0,0,0,0,0,0,0];
		var ze = [0,0,0,0,0,0,0,0,0];
		var um = [0,0,0,0,0,0,0,0,0];
		var proc = new Array(Math.ceil(vetorTop.length/2));
		var cont = 0;
		for(var a = 0; a < vetorTop.length; a++){
			if(vetorTop[a] != ","){
				proc[cont++] = vetorTop[a];
			}
		}
		var qest = parseInt(qtdEst);
		var nproc = proc.slice(0);
		var atu;
		var RelaEs = [];
		var RelaIn = [];
		var RelaOu = [];
		var i, j;

		h2can = 605 - 0.2*605;
		ctx.canvas.width = 1427;
		ctx.canvas.height = 605;
		ctx.font = "20px Arial";
		ctx.lineWidth = 2;

		if(qest == 1){
			alert("Operação Inválida");
			window.stop();
		}
		for(i = 0; i < nproc.length; i += 4){
			if(nproc[i+1] == 1){
				um[nproc[i]]++;
			}
			else if(nproc[i+1] == 0){
				ze[nproc[i]]++;
			}
			dumb2[nproc[i]]++;
			if(dumb2[nproc[i]] > 1){
				alert("Operação Inválida\nDois caminhos possiveis com a mesma entrada");
				window.stop();
			}
			if(dumb[nproc[i+2]] == -1){
				dumb[nproc[i+2]] = nproc[i+3];
			}
			else{
				if(dumb[nproc[i+2]] != nproc[i+3] && tipo){
					alert("Operação Inválida\nUm estado com duas saidas diferentes em Tipo Moore");
					window.stop();
				}
			}
		}

		if(qest == 3 | qest == 5 | qest == 8){
			est[0] = randomCircle(ctx,'#a80000', mX(bpos[0]), mY(bpos[0]),40);
			atu = 0;
		}
		if(qest == 4 | qest == 6 | qest == 7 | qest == 8){
			if(qest == 8){
				est[1] = randomCircle(ctx,'#999', mX(bpos[1]), mY(bpos[1]),40);
			}
			else{
				est[1] = randomCircle(ctx,'#a80000', mX(bpos[1]), mY(bpos[1]),40);
				atu = 1;
			}
		}
		if(qest == 2 | qest == 5 | qest == 6 | qest == 7 | qest == 8){
			if(qest == 2){
				est[2] = randomCircle(ctx,'#a80000', mX(bpos[2]), mY(bpos[2]),40);
				atu = 2;
			}
			else{
				est[2] = randomCircle(ctx,'#999', mX(bpos[2]), mY(bpos[2]),40);
			}
		}
		if(qest == 3 | qest == 4 | qest == 6 | qest == 7 | qest == 8){
			est[3] = randomCircle(ctx,'#999', mX(bpos[3]), mY(bpos[3]),40);
		}
		if(qest == 5 | qest == 7 | qest == 8){
			est[4] = randomCircle(ctx,'#999', mX(bpos[4]), mY(bpos[4]),40);
		}
		if(qest == 3 | qest == 4 | qest == 6 | qest == 7 | qest == 8){
			est[5] = randomCircle(ctx,'#999', mX(bpos[5]), mY(bpos[5]),40);
		}
		if(qest == 2 | qest == 5 | qest == 6 | qest == 7 | qest == 8){
			est[6] = randomCircle(ctx,'#999', mX(bpos[6]), mY(bpos[6]),40);
		}
		if(qest == 4 | qest == 5 | qest == 6 | qest == 7 | qest == 8){
			est[7] = randomCircle(ctx,'#999', mX(bpos[7]), mY(bpos[7]),40);
		}

		for(i = 1; i < 10; i++){
			if(dumb2[i] > -1){
				dumb2[i] = randomCircle(ctx,'#eee', 100, (i-1)*74+36,20);
				ctx.fillText(""+i, 95, (i-1)*74+41);
				if(ze[i] == 1){
					ze[i] = randomCircle(ctx,'#eee', 190, (i-1)*75+17,15);
					arrow(ctx,dumb2[i],ze[i],10,1,0);
					ctx.font = "15px Arial";
					ctx.fillText("0", 130, (i-1)*75+20,15);
					for(j = 0; j < nproc.length; j +=4){
						if(nproc[j] == i && nproc[j+1] == 0){
							if(!tipo){
								ctx.fillText("/"+nproc[j+3], 140, (i-1)*75+20,15);
							}
							ctx.fillText(""+nproc[j+2], 185, (i-1)*75+21,15);
							break;
						}
					}
					ctx.font = "20px Arial";
				}
				if(um[i] == 1){
					um[i] = randomCircle(ctx,'#eee', 190, (i-1)*75+51,15);
					arrow(ctx,dumb2[i],um[i],10,1,0);
					ctx.font = "15px Arial";
					ctx.fillText("1", 130, (i-1)*75+59,15);
					for(j = 0; j < nproc.length; j +=4){
						if(nproc[j] == i && nproc[j+1] == 1){
							if(!tipo){
								ctx.fillText("/"+nproc[j+3], 140, (i-1)*75+59,15);
							}
							ctx.fillText(""+nproc[j+2], 185, (i-1)*75+56,15);
							break;
						}
					}
					ctx.font = "20px Arial";
				}
			}
		}

		ctx.fillStyle = ctx.strokeStyle = '#5ba4ba';

		if(qest == 2){
			for(i = 0; i < proc.length; i += 2){
				if(proc[i] == 1)
					proc[i] = 2;
				else if(proc[i] == 2)
					proc[i] = 6;
			}
			write();
			arrows();
		}
		if(qest == 3){
			for(i = 0; i < proc.length; i += 2){
				if(proc[i] == 1)
					proc[i] = 0;
				else if(proc[i] == 2)
					proc[i] = 3;
				else if(proc[i] == 3)
					proc[i] = 5;
			}
			write();
			arrows();
		}
		if(qest == 4){
			for(i = 0; i < proc.length; i += 2){
				if(proc[i] == 1)
					proc[i] = 1;
				else if(proc[i] == 2)
					proc[i] = 3;
				else if(proc[i] == 3)
					proc[i] = 5;
				else if(proc[i] == 4)
					proc[i] = 7;
			}
			write();
			arrows();
		}
		if(qest == 5){
			for(i = 0; i < proc.length; i += 2){
				if(proc[i] == 1)
					proc[i] = 0;
				else if(proc[i] == 2)
					proc[i] = 2;
				else if(proc[i] == 3)
					proc[i] = 4;
				else if(proc[i] == 4)
					proc[i] = 6;
				else if(proc[i] == 5)
					proc[i] = 7;
			}
			write();
			arrows();
		}
		if(qest == 6){
			for(i = 0; i < proc.length; i += 2){
				if(proc[i] == 1)
					proc[i] = 1;
				else if(proc[i] == 2)
					proc[i] = 2;
				else if(proc[i] == 3)
					proc[i] = 3;
				else if(proc[i] == 4)
					proc[i] = 5;
				else if(proc[i] == 5)
					proc[i] = 6;
				else if(proc[i] == 6)
					proc[i] = 7;
			}
			write();
			arrows();
		}
		if(qest == 7){
			write();
			arrows();
		}
		if(qest == 8){
			for(i = 0; i < proc.length; i += 2){
				proc[i]--;
			}
			write();
			arrows();
		}

		function correct(x,y,x2,y2,f){
			x += Math.round((Math.random()-.5)*10);
			y += Math.round((Math.random()-.5)*10);
			return {x:x,y:y};
		}

		function arrow(ctx,p3,p4,size,aw,ran){
			var p1 = p3;
			var p2 = p4;
			if(ran){
				p1 = correct(parseInt(p3.x),parseInt(p3.y), parseInt(p4.x), parseInt(p4.y),0);
				p2 = correct(parseInt(p4.x),parseInt(p4.y), parseInt(p3.x), parseInt(p3.y),1);
			}
			ctx.save();
			var points = edges(ctx,p1,p2);
			if (points.length < 2) return 
				p1 = points[0], p2 = points[points.length-1];
			var dx = p2.x-p1.x, dy = p2.y-p1.y, len = Math.sqrt(dx*dx+dy*dy);
			ctx.translate(p2.x,p2.y);
			ctx.rotate(Math.atan2(dy,dx));
			ctx.lineCap = 'round';
			ctx.beginPath();
			ctx.moveTo(0,0);
			ctx.lineTo(-len,0);
			ctx.closePath();
			ctx.stroke();
			if(aw == 1){
				ctx.beginPath();
				ctx.moveTo(0,0);
				ctx.lineTo(-size,-size);
				ctx.lineTo(-size, size);
				ctx.closePath();
				ctx.fill();
			}
			ctx.restore();
		}

		function edges(ctx,p1,p2,cutoff){
			if (!cutoff) cutoff = 220;// alpha threshold
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

		function mX(k){
			return (((Math.sin(k)*h2can)-(Math.cos(bpos[4])*1427))/((Math.sin(bpos[2]))-(Math.sin(bpos[6]))));
		}
		function mY(k){
			return (605+(((Math.cos(k)*h2can)+(Math.sin(bpos[2])*605))/((Math.cos(bpos[4]))-(Math.cos(bpos[0])))));
		}
		function mXre(k, l){
			if(k == 0){
				if(l == 0) return 664;
				else if(l == 1) return 763;
			}
			else if(k == 1){
				if(l == 0) return 885;
				else if(l == 1) return 954;
			}
			else if(k == 2){
				return 1005;
			}
			else if(k == 3){
				if(l == 0) return 954;
				else if(l == 1) return 885;
			}
			else if(k == 4){
				if(l == 0) return 763;
				else if(l == 1) return 664;
			}
			else if(k == 5){
				if(l == 0) return 542;
				else if(l == 1) return 473;
			}
			else if(k == 6){
				return 422;
			}
			else if(k == 7){
				if(l == 0) return 473;
				else if(l == 1) return 542;
			}
		}

		function mYre(k, l){
			if(k == 0){
				return 11;
			}
			else if(k == 1){
				if(l == 0) return 62;
				else if(l == 1) return 131;
			}
			else if(k == 2){
				if(l == 0) return 253;
				else if(l == 1) return 352;
			}
			else if(k == 3){
				if(l == 0) return 474;
				else if(l == 1) return 543;
			}
			else if(k == 4){
				return 594;
			}
			else if(k == 5){
				if(l == 0) return 543;
				else if(l == 1) return 474;
			}
			else if(k == 6){
				if(l == 0) return 352;
				else if(l == 1) return 253;
			}
			else if(k == 7){
				if(l == 0) return 131;
				else if(l == 1) return 62;
			}
		}
		function write(){
			for(i = 0; i < proc.length; i += 4){
				ctx.fillStyle  = '#000';
				if(tipo){
					ctx.fillText(""+nproc[i],est[proc[i]].x-5,est[proc[i]].y-5);
					ctx.fillText("___",est[proc[i]].x-15,est[proc[i]].y-1);
					ctx.fillText(""+nproc[i+3],est[proc[i+2]].x-5,est[proc[i+2]].y+22);
				}
				else{
					ctx.font = "30px Arial";
					ctx.fillText(""+nproc[i],est[proc[i]].x-8,est[proc[i]].y+9);
				}
				ctx.font = "20px Arial";
				ctx.fillStyle  = '#5ba4ba';
			}
		}

		function output(i,prime){
			ctx.beginPath();
			ctx.rect(1100,70,300,800);
			ctx.fillStyle  = '#fff';
			ctx.fill();
			ctx.fillStyle  = '#000';
			ctx.font = "20px Arial";
			if(!prime){
				ctx.fillText("Estado anterior: "+nproc[i],1150,100);
				ctx.fillText("Estado atual: "+nproc[i+2],1150,130);
				ctx.fillText("Saida: "+nproc[i+3],1150,160);
				RelaEs.push(nproc[i+2]);
				RelaIn.push(nproc[i+1]);
				RelaOu.push(nproc[i+3]);
			}
			else{
				ctx.fillText("Estado anterior: ",1150,100);
				ctx.fillText("Estado atual: 1",1150,130);
				RelaEs.push(1);
				if(tipo == 1){
					for(i = 0; i < nproc.length; i += 4){
						if(nproc[i+2] == 1){
							ctx.fillText("Saida: "+nproc[i+3],1150,160);
							RelaOu.push(nproc[i+3]);
							break;
						}
					}
				}
				else{
					ctx.fillText("Saida: ",1150,160);
				}
			}
			ctx.font = "20px Arial";
			ctx.fillStyle  = '#5ba4ba';
		}

		function arrows(){
			for(i = 0; i < proc.length; i += 4){
				if(proc[i] == proc[i+2]){
					var a = randomCircle(ctx,'#5ba4ba',mXre(proc[i],0),mYre(proc[i],0),2);
					var b = randomCircle(ctx,'#5ba4ba',mXre(proc[i],1),mYre(proc[i],1),2);
					arrow(ctx,a,est[proc[i]],10,0,0);
					arrow(ctx,b,a,10,0,0);
					arrow(ctx,a,b,10,0,0);
					arrow(ctx,b,est[proc[i]],10,1,0);
				}
				else
					arrow(ctx,est[proc[i]],est[proc[i+2]],10,1,1);
			}
		}

		ctx.fillStyle = ctx.strokeStyle = '#000';
		for(i = 0; i < nproc.length; i += 4){
			if(nproc[i] == 1){
				output(i,1);
				break;
			}
		}

		$("#bt0").click(function(){
				var achou = 0;
				randomCircle(ctx,'#999', mX(bpos[atu]), mY(bpos[atu]),40);
				for(i = 0; i < proc.length; i += 4){
					if(proc[i] == atu && proc[i+1] == 0){
						atu = proc[i+2];
						achou = 1;
						output(i,0);
						break;
					}
				}
				randomCircle(ctx,'#a80000', mX(bpos[atu]), mY(bpos[atu]),40);
				write();
				if(!achou){
					alert("Não há destino com a entrada 0 no estado atual");
				}
		});

		$("#bt1").click(function(){
				var achou = 0;
				randomCircle(ctx,'#999', mX(bpos[atu]), mY(bpos[atu]),40);
				for(i = 0; i < proc.length; i += 4){
					if(proc[i] == atu && proc[i+1] == 1){
						atu = proc[i+2];
						achou = 1;
						output(i,0);
						break;
					}
				}
				randomCircle(ctx,'#a80000', mX(bpos[atu]), mY(bpos[atu]),40);
				write();
				if(!achou){
					alert("Não há destino com a entrada 1 no estado atual");
				}
		});

		$("#btR").click(function(){
				alert("Relatorio:\nEstados: "+RelaEs+"\nEntradas: "+RelaIn+"\nSaidas: "+RelaOu);
		});

		//window.location.reload(true);

});
