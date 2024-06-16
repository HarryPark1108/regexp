// Ch3 정규표현식
// Ch3-2 정규식 생성

const str = `
010-1234-5678
thesecon@gmail.com
https://www.omdbapi.com/?apikey=f88998d5&s=frozen
The quick brown fox jumps over the lazy dog.
abbcccdddd
http://localhost:1234
동해물과_백두산이 마르고 닳도록
`
// 생성자 방식
const regexp = new RegExp("the", "gi")
// 옵션이 없으면, 첫밴째 문자만
// g : 해당하는 모든 문자 
// i : 대소문자 구분하지 않음
console.log(str.match(regexp))

// 리터럴 방식
const regexp2 = /the/gi
console.log(str.match(regexp2))

// Ch3-3 메소드
const regexp3 = /fox/gi
console.log(regexp.test(str))
console.log(str.replace (regexp3, "AAA"))
console.log(str)

// Ch3-4 플래그(옵션)
console.log(str.match(/the/gi))
console.log(str.match(/\.$/gim)) // m flog : 임의로 줄바꿈한 부분에서 찾아냄 -> dog. 


// Ch3-5 패턴(표현)-1
console.log(str.match(/d$/gm))
console.log(str.match(/^t/gim))
console.log(str.match(/./g))
console.log(str.match(/h..p/g))
console.log(str.match(/fox|dog/))
console.log(str.match(/dog|fox/))
console.log(str.match(/https?/g))
console.log(str.match(/d{2}/g))
console.log(str.match(/d{2,}/g))
console.log(str.match(/d{2,3}/g))
console.log(str.match(/\b\w{2,3}\b/g)) // \b : 경계, /w : 영어, 숫자 words


// Ch3-6 패턴(표현)-2
console.log(str.match(/[0-9]{1,}/g))
console.log(str.match(/[가-힣]{3,}/g))
console.log(str.match(/\w/g))
console.log(str.match(/\b/g))
console.log(str.match(/\bf\w{1,}/g))
console.log(str.match(/\d{1,}/g))

const h = `  the hello  world    !

`
console.log(h.match(/\s/g))
console.log(h.replace(/\s/g, ""))

const str2 = `
010-1234-5678
thesecon@gmail.com
https://www.omdbapi.com/?apikey=f88998d5&s=frozen
The quick brown fox jumps over the lazy dog.
abbcccdddd
`
console.log(str2.match(/.{1,}(?=@)/g))
console.log(str2.match(/(?<=@).{1,}/g))