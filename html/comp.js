function waktu(){ //tampil tanggal
var tgl=new Date();
var hari=new Array(7);
hari[0]="Minggu";
hari[1]="Senin";
hari[2]="Selasa";
hari[3]="Rabu";
hari[4]="Kamis";
hari[5]="Jumat";
hari[6]="Sabtu";
var bulan=new Array(12);
bulan[0]="Januari";
bulan[1]="Februari";
bulan[2]="Maret";
bulan[3]="April";
bulan[4]="Mei";
bulan[5]="Juni";
bulan[6]="Juli";
bulan[7]="Agustus";
bulan[8]="September";
bulan[9]="Oktober";
bulan[10]="November";
bulan[11]="Desember";
document.getElementById("@tanggal").innerHTML=hari[tgl.getDay()]+","+"&nbsp;"+tgl.getDate()+"&nbsp;"+bulan[tgl.getMonth()]+"&nbsp;"+tgl.getFullYear();
}
function tampilauthor(){ //tampil author
	document.getElementById('@author').innerHTML=window.atob('QVVUSE9SIEJZIEFCSU1BTllVIEFHLg==');
}
function call_byplu(){ //panggil menu plu
document.getElementById('@menugrid').style.display="none";
document.getElementById('@iframe').style.display="block";
document.getElementById('@iframe').setAttribute('src','https://cdn.jsdelivr.net/gh/abimanyuag/lucknut.github.io/html/plu.html');
}
function call_byupc(){ //panggil menu upc
document.getElementById('@menugrid').style.display="none";
document.getElementById('@iframe').style.display="block";
document.getElementById('@iframe').setAttribute('src','https://cdn.jsdelivr.net/gh/abimanyuag/lucknut.github.io/html/upc.html');
}
function call_byloc(){ //panggil menu lokasi
document.getElementById('@menugrid').style.display="none";
document.getElementById('@iframe').style.display="block";
document.getElementById('@iframe').setAttribute('src','https://cdn.jsdelivr.net/gh/abimanyuag/lucknut.github.io/html/cvd.html');
}
function call_qrs(){ //panggil menu scan qr
document.getElementById('@menugrid').style.display="none";
document.getElementById('@iframe').style.display="block";
document.getElementById('@iframe').setAttribute('src','https://cdn.jsdelivr.net/gh/abimanyuag/lucknut.github.io/html/qrs.html');
}
function tampil_produkid(){ //cetak by id 
document.getElementById('@deskripsi').innerHTML = "Description:"+"<br>"+get_desc();
document.getElementById('@pack').innerHTML = "Pack:"+"<br>"+get_pack();
document.getElementById('@unit').innerHTML = "Unit:"+"<br>"+get_unit();
}
function tampil_lok(){ //cetak by lokasi
document.getElementById('@checkdigit').innerHTML =get_cdgt();
document.getElementById('@voicedigit').innerHTML =get_getvd();
}
function tampil_produkbc(){ //cetak by upc
document.getElementById('@id').innerHTML ="PLU:"+"<br>"+get_id();
document.getElementById('@deskripsi').innerHTML ="Description:"+"<br>"+ get_desc();
document.getElementById('@pack').innerHTML = "Pack:"+"<br>"+get_pack();
document.getElementById('@unit').innerHTML = "Unit:"+"<br>"+get_unit();
}
function elemen_kontak(){
	var a=document.createElement('ul');
	var span1=document.createElement('span');
	var span2=document.createElement('span');
	var span3=document.createElement('span');
	var link_email=document.createElement('a');
	var link_fb=document.createElement('a');
	var link_linkedin=document.createElement('a');
	link_email.setAttribute('style','font-weight:bold;color:#5dade2;text-decoration: none;');
	link_email.href =window.atob('bWFpbHRvOmFiaW1hbnl1YmltYUBob3RtYWlsLmNvbQ==');
	link_fb.setAttribute('style','font-weight:bold;color:#5dade2;text-decoration: none;cursor:pointer');
	link_linkedin.setAttribute('style','font-weight:bold;color:#5dade2;text-decoration: none;cursor:pointer');
	link_email.appendChild(document.createTextNode("abimanyubima@hotmail.com"));
	link_fb.appendChild(document.createTextNode("Abimanyu Bima AG"));
	link_linkedin.appendChild(document.createTextNode("Abimanyu AG"));
	link_linkedin.onclick=function(){window.open(window.atob("aHR0cHM6Ly93d3cubGlua2VkaW4uY29tL2luL2FiaW1hbnl1YmltYQ=="));}
	link_fb.onclick=function(){window.open(window.atob("aHR0cHM6Ly93d3cuZmFjZWJvb2suY29tL21hcy5iaW0uNzM5OQ=="));}
	document.body.appendChild(a);
	span1.innerText="YOU CAN FIND ME HERE & BE MY FRIEND"+"\n"+"\n"+"Email ";
	span2.innerText="\n"+"\n"+"Facebook ";
	span3.innerText="\n"+"\n"+"LinkedIn ";
	a.appendChild(span1);
	a.appendChild(link_email);
	a.appendChild(span2);
	a.appendChild(link_fb);
	a.appendChild(span3);
	a.appendChild(link_linkedin);
}
function elemen_id(){//set elemen plu
	var b=document.createElement('input');
	b.setAttribute('type','text');
	var c=document.getElementById('@input_id');
	c.placeholder ='Search...';
	c.setAttribute('maxLength',7);
	c.appendChild(b);
}
function elemen_bc(){//set elemen upc
	var d=document.createElement('input');
	d.setAttribute('type','text');
	var h=document.getElementById('@input_bc');
	h.placeholder ='Search...';
	h.appendChild(d);
}
function elemen_lok(){//set elemen lokasi
	var c=document.createElement('input');
	c.setAttribute('type','text');
	var d=document.getElementById('@input_lok');
	d.placeholder ='Search...';
	// d.style.textTransform='uppercase';
	d.setAttribute('maxLength',6);
	d.appendChild(c);
}
function elemen_scanqr(){//set elemen scanner
let scanner = new Instascan.Scanner(
            {
                video: document.getElementById('@preview'), mirror: false ,torch: true 
                // prevents the video to be mirrored });
            }
            //scanner.getPhotoCapabilities();
  
        );
        scanner.addListener('scan', function(content) {
          var suara=new Audio('https://cdn.jsdelivr.net/gh/abimanyuag/lucknut.github.io/audio/scan.mp3');
          suara.play();
          var substr=content.substring(4);
          var getplu=substr.substring(0,substr.indexOf('C'))||substr.substring(0,substr.indexOf('I'))||substr.substring(0,substr.indexOf('B'));
          document.getElementById('@catch').innerHTML='Check digit:'+'&nbsp;'+content.slice(0,1)+'<br>'+'Voice digit:'+'&nbsp;'+content.slice(1,3);
          //tampil deskripsi,pack,unit
          document.getElementById('@catchplu').innerHTML=getplu+'&nbsp;'+var_prdgroc_byid[getplu].desc+'<br>'+var_prdgroc_byid[getplu].unit+'&nbsp;'+var_prdgroc_byid[getplu].pack;
         
          //var xy=content.substring(0, content.indexOf('-'));
          
            //alert('Check digit: '+content.slice(0,1)+'Voice digit: '+content.slice(1,3));
            //window.open(content, "_blank");
//scanner.stop();
        });
        Instascan.Camera.getCameras().then(cameras => 
        {
            if(cameras.length > 0){
                scanner.start(cameras[0]);
            } else {
                console.error("Please enable Camera!");
            }
        });
}
