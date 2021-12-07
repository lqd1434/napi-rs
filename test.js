const rust = require('.');

const jsFb = (n)=>{
	if (n<=2){
		return n
	}
	return jsFb(n-1)+jsFb(n-2)
}


console.time('js执行时间 ');
 jsFb(50)
console.timeEnd('js执行时间 ');

console.time('rust执行时间 ');
const res = rust.rust_fb(50);
console.log(res)
console.timeEnd('rust执行时间 ');

