//  1. Satrni teskari qilish
// function qaytariw(str) {
//   return str.split('').reverse().join('');
// }

// // 2. So‘zlarni joyini almashtirish
// function wordss(str) {
//   const words = str.split(' ');
//   const first = words.shift();
//   const last = words.pop();
//   words.unshift(last);
//   words.push(first);
//   return words.join(' ');

// 3 Bosh harflarni sanash: Berilgan satrda nechta bosh harf borligini aniqlang.

// function bigword(str) {
//     let result = ""; 
//     for (let i = 0; i < str.length; i++) {
//         if (str[i] !== ' ' && str[i] === str[i].toUpperCase()) {
//             result += str[i]; 
//         }
//     }

//     return result
// }
// console.log(bigword('hello World'))

// 5.Belgini almashtirish: Satrda ma'lum bir belgini boshqa belgiga almashtiring.
// function aab(a, b, c) {
//   return a.split(b).join(c);
// }
// console.log(aab("Salom, dunyo!", "dunyo", "olam"));

// 6 So‘zlarni hisoblash: Satrda nechta so‘z borligini aniqlang.
// function leng(str) {
//   return str.trim().length;
// }
// console.log(leng('hello world'))

// 8 So‘zlarni teskari qilish: Satrdagi har bir so‘zni teskari qilib, natijani qaytaring.
// function reverseWord(satr) {
//     let arr = satr.split(' ')
//     let rever = word.map(function(soz) {
//         return soz.split('').reverse().join('')
//     })
//     return rever.join(' ')
// }
//  console.log(reverseWord("Salom dunyo"))

//  9 Qayta takrorlanadigan so‘zlarni o‘chirish: Satrda bir xil bo‘lgan takroriy so‘zlarni o‘chirib tashlang.

// 10 Belgi indeksini topish: Satrda ma'lum bir belgining birinchi uchrashgan indeksini toping.
// function indexiniTopish(str, a) {
//   return str.indexOf(a);
// }
// console.log(indexiniTopish("Salom, dunyo", "zero"))

// 11 Unli harflarni o‘chirish: Berilgan satrdagi barcha unli harflarni olib tashlang.
// function unli(satr) {
//     let res = ''; 

//     for (let i = 0; i < satr.length; i++) {
//         let harf = satr[i];
        
//         if (harf !== 'A' && harf !== 'a' && 
//         harf !== 'E' && harf !== 'e' && 
//         harf !== 'I' && harf !== 'i' && 
//         harf !== 'O' && harf !== 'o' && 
//         harf !== 'U' && harf !== 'u') {
//             res += harf; 
//         }
//     }

//     return res; 
// }
// console.log(unli('salom')); 

// 12 So‘zlarni tartiblash: Satrdagi so‘zlarni alifbo tartibida joylang.
//function sortlaw(str) {
    //   return str.split(' ').sort().join(' ');
    // }

// 13 Eng uzun so‘zni topish: Berilgan satrdan eng uzun so‘zni aniqlang.

// function engUzunSozniTopish(satr) {
//     let sozlar = satr.trim().split(' ')
//     let engUzun = ''
//     for (let soz of sozlar) {
//         if (soz.length > engUzun.length) {
//             engUzun = soz 
//         }
//     }
//     return engUzun
// }
// console.log(engUzunSozniTopish('helllo world'))

// 14 Satrni qisqartirish: Satrni kiritilgan uzunlik bo‘yicha qisqartirib, oxiriga ... qo‘shing.

// function qisqartirish(satr, uzunlik) {
//     if (satr.length <= uzunlik) {
//         return satr
//     }
//        return satr.slice(0, uzunlik) + '...';
// }
// console.log(qisqartirish('hgvhgcgfgjcfxv h hj i i uyhik h' , 10))

// 15 Unli va undoshlarni sanash: Berilgan satrda nechta unli va undosh harf borligini aniqlang.

// function count(harf){
//     var res = 0
//     var ress = 0
//     if (harf == 'A' || harf == 'a' || 
//         harf == 'E' || harf == 'e' || 
//         harf == 'I' || harf == 'i' || 
//         harf == 'O' || harf == 'o' || 
//         harf == 'U' || harf == 'u') {
//             res++
//         }
//         else{
//             ress++
//         }
// }
// console.log(count('hello world'), res+'unlilar',ress+'undow');

// 16 So‘zlarni birlashtirish: Berilgan satrdagi barcha so‘zlarni belgilangan belgiga (masalan, -) ulanadigan qilib qaytaring.

// function qoshiw(str, a) {
//    return str.split(' ').join(a);
//  }
//  console.log(qoshiw('JavaScript dasturlaw tili', '*'))

// 17 Satrni katta harfga o‘tkazish: Satrning barcha kichik harflarini katta harfga o‘zgartiring.
// function abs(str) {
//    return str.toUpperCase()
//  }
//  console.log(abs('jhbdjkjsannhf helo wolrl'))

// 18 Raqamlarni ajratib olish: Satr ichidagi barcha raqamlarni ajratib oling va massivda qaytaring.
// function ajratiwRaqam(satr) {
//     let raqamlar = []
//     for (let i = 0; i < satr.length; i++) {
//         let harf = satr[i];
//         if (harf == '1' || harf == '2' || 
//         harf == '3' || harf == '4' || 
//         harf == '5' || harf == '6' || 
//         harf == '7' || harf == '8' || 
//         harf == '9' || harf == '0') {
//             raqamlar.push(harf);
//         }
//     }
//     return raqamlar
// }
// console.log(ajratiwRaqam('yaqinda 2025 keladi'))
// 19 Satrni sozlash: Satr boshida va oxirida turgan bo‘sh joylarni olib tashlang.

// function trm(str) {
//    return str.trim()
//  }
//  console.log(trm('dsajnd hjd chjas jka '));

// ******************************Massivga oid********************************************

// 1 Eng katta qiymatni topish: Berilgan massiv ichidagi obyektlarning ma'lum bir kalitiga (masalan, age) qarab eng katta qiymatni aniqlang.

// function engKattaQiymat(massiv) {
//     if (massiv.length === 0) {
//         return []
//     }

//     let engKatta = 0
//     for (let i = 0; i < massiv.length; i++) {
//         let obekt = massiv[i]
//         if (obekt.age > engKatta) {
//             engKatta = obekt.age
//         }
//     }

//     return engKatta
// }

// const odamlar = [
//     { name: 'Ali', age: 25 },
//     { name: 'Vali', age: 30 },
//     { name: 'gani', age: 28 }
// ];

// console.log(engKattaQiymat(odamlar, 'age'))

// 2 Kalit bo‘yicha saralash: Massiv ichidagi obyektlarni ma'lum bir kalitga qarab o‘sish yoki kamayish tartibida saralang.

// function saralash(massiv, tartib) {
//     if (tartib === 'top') {
//         massiv.sort(function(a, b) {
//             return a.age - b.age;
//         });
//     } else if (tartib === 'pas') {
//         massiv.sort(function(a, b) {
//             return b.age - a.age; 
//         });
//     } else {
//         console.error(error)
//     }
// }

// const odamlar = [
//     { name: 'Ali', age: 25 },
//     { name: 'Vali', age: 30 },
//     { name: 'gani', age: 28 }
// ];

// saralash(odamlar, 'top');
// console.log("O'sish tartibida:", odamlar);

// saralash(odamlar, 'pas');
// console.log("Kamayish tartibida:", odamlar);

// 3 Kalit qiymatlarini yig‘ish: Massiv ichidagi obyektlarning ma'lum bir kalitidagi son qiymatlarni qo‘shib, umumiy yig‘indini qaytaring.
// function yigindi(arr, key) {
//     let res = 0; 
//     for (let i = 0; i < arr.length; i++) {
//         let obj = arr[i];
//         if (obj[key] && typeof obj[key] === 'number') {
//             res += obj[key]
//         }
//     }

//     return res
// }

// const odamlar = [
//     { name: 'Ali', age: 25 },
//     { name: 'Vali', age: 30 },
//     { name: 'gani', age: 28 }
// ];

// const natija = yigindi(odamlar, 'age');
// console.log("Yigindisi:", natija);

// 4

// 5 Unikal qiymatlarni ajratib olish: Massiv ichidagi obyektlarning ma'lum bir kalitidagi unikal qiymatlarni qaytaring.

// 6 Kalitni qo‘shish: Massiv ichidagi har bir obyektga yangi kalit qo‘shing va uning qiymatini hisoblab bering (masalan, fullName = firstName + lastName).
// function addKye(arg) {
//     for (let i = 0; i < arg.length; i++) {
//         const obj = arg[i]
//         obj.fullName = obj.firstName + ' ' + obj.lastName; 
//     }

//     return arg; 
// }

// const odamlar = [
//     { firstName: 'ali', lastName: 'valiyev' },
//     { firstName: 'anora', lastName: 'zokirova' },
//     { firstName: 'polat', lastName: 'asqariv' }
// ];

// console.log(newPerson = addKye(odamlar));
// 7 Obyektni yangilash: Massivdagi ma'lum bir obyektni berilgan shart bo‘yicha topib, uning qiymatlarini yangilang.

// function refrew(mas, shart, newAdd) {
//     for (let i = 0; i < mas.length; i++) {
//         const obekt = mas[i]; 

//         if (obekt.name === shart) {
//             for (let kalit in newAdd) {
//                 obekt[kalit] = newAdd[kalit]; 
//             }
//             break; 
//         }
//     }

//     return mas; 
// }

// const odamlar = [
//     { name: 'Ali', age: 25 },
//     { name: 'Vali', age: 30 },
//     { name: 'gani', age: 28 }
// ];

// const newAdd = { age: 26, fullName: 'Ali Valiyev' };

// console.log(refrew(odamlar, 'Ali', newAdd));

// 8 Ma'lum obyektni o‘chirish: Massivdan ma'lum bir obyektni uning kalit qiymati asosida olib tashlang.
// function deleteObj(arr, key, value) {
//     for (let i = 0; i < arr.length; i++) {
//         const obekt = arr[i];

//         if (obekt[key] === value) {
//             arr.splice(i, 1); 
//             break; 
//         }
//     }

//     return arr
// }

// const odamlar = [
//     { name: 'Ali', age: 25 },
//     { name: 'Vali', age: 30 },
//     { name: 'Oydin', age: 28 }
// ];


// console.log( deleteObj(odamlar, 'name', 'Vali'));

// 9 Obyektlar sonini sanash: Ma'lum bir kalitning qiymatiga qarab obyektlarni guruhlab, har bir guruhdagi obyektlar sonini aniqlang.

// function guruhlash(arr, key) {
//     const res = {}; 

//     for (let i = 0; i < arr.length; i++) {
//         const obekt = arr[i]
//         const value = obekt[key]

//         if (res[value]) {
//             res[value]++;
//         } else {
//             res[value] = 1; 
//         }
//     }

//     return res; 
// }

// const odamlar = [
//     { name: 'Ali', age: 25 },
//     { name: 'Vali', age: 30 },
//     { name: 'gani', age: 25 },
//     { name: 'polat', age: 30 },
//     { name: 'Anora', age: 28 }
// ];

// console.log(guruhlash(odamlar, 'age'));

// 10 Massivni obyektga aylantirish: Massiv ichidagi obyektlarni ma'lum bir kalit qiymati asosida yangi obyektga guruhlang (masalan, city kaliti bo‘yicha obyektlar guruhlanadi).

// function guruhlash(arr, key) {
//     const res = {}
//     for (let i = 0; i < arr.length; i++) {
//         const obj = arr[i]
//         const value = obj[key]

//         if (!res[value]) {
//             res[value] = []
//         }
//         res[value].push(obj);
//     }

//     return res; 
// }

// const odamlar = [
//     { name: 'Ali', age: 25, city: 'Toshkent' },
//     { name: 'Vali', age: 30, city: 'Samarqand' },
//     { name: 'gani', age: 25, city: 'Toshkent' },
//     { name: 'polat', age: 30, city: 'Buxoro' },
//     { name: 'Anora', age: 28, city: 'Samarqand' }
// ];

// console.log(guruhlash(odamlar, 'city'));

// push()
// pop()
// shift()
// unshift()
// slice()
// splice()
// concat()
// indexOf()
// lastIndexOf()
// includes()
// forEach()
// map()
// filter()
// every()
// some()
// find()
// findIndex()
//trim()