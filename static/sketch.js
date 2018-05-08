
var vocab,word;
var maximum_length=30;
var inp;
var sentences=[];


var emoticon_list=["థ౪థ)","(￣ヘ￣)","(╯︿╰)","(╥﹏╥)","(♡‿♡)","(╯_╰)","(￣▽￣)/","(*^ｖ^*)","❤","( ͡° ͜ʖ ͡°)","(^u^)","♪(^∇^*)","(⊙ˍ⊙)","(๑•̀ㅂ•́)و✧","(-_-)zzz","(╯‿╰)","(⌒‿⌒)","＼(￣▽￣)／","(*˘︶˘*).｡.:*♡"," (-_-)","(⌒_⌒;)","＼(^o^)／","(°_°)","(๑ơ ₃ ơ)♥","♥"," (°-°)","(*•̀ᴗ•́*)و ̑̑","(︶︹︺)","(／。＼)","(＞﹏＜)","(^_^)v","(⁍̴̀‿⁍̴́)","(╯°□°)╯︵ ┻━┻","(๑•̀ㅂ•́)و✧","(╥_╥)","(=_=)","(ˆ ڡ ˆ)","(ꐦ°᷄д°᷅)","(ノ*°▽°*)"," (*´﹃｀*)","└(￣ ￣└)(┘￣ ￣)┘","⊙ω⊙ ","︻┻┳══━一","(,,꒪꒫꒪,,)","( ‵▽′)ψ","(-_-;)","( ´•̥×•̥` )","♡ ","((d[-_-]b))","(￣y_￣)","(^_-)","(XωX)","( ﾟдﾟ)","(^○^)","(･ω<)☆"," (*￣︿￣)","(> ﹏ <)","ᕙ(•̀_•́)ᕗ","(ง •̀_•́)ง","♥","｡:.ﾟ♥.:｡","♥","(￣┰￣*)"," *★,°*:.☆(￣▽￣)/$:*.°★* 。"];






function setup() {
  var cvs = createCanvas(windowWidth, windowHeight);
  cvs.parent('canvas');
  cvs.id('myCanvas');
  inp = createInput('');
  inp.id('input');
  inp.position(width*0.2,height*0.8);
  inp.size(width*0.6,height*0.05);
 // button = createButton('Emoticon!');
 // button.id('emo');
  //button.position(inp.x+inp.width/2,inp.y+inp.sheight+30);
  //button.mousePressed();

 

}
var i=0

function draw() {

  background(30);
  textSize(50);
  fill(255);
  textAlign(CENTER);
 
  text(emoticon,width/2,height/2);
  
  i++;
}
