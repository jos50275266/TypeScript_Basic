"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// You can pass in any object anything whatsoever that has there three properties.
// We don't want to rewrite over and aver and over again. We just want to take this sort method
// and copy and paste it down to these child classes. We never ever expect to instantiate Sorter class directly.
// You and I know know very well that when we take Sorter and try to extend some child with Sorter
// There will be compare and swap is avaialble.
// The place We're going to use Sorter is where ahving those properties(sort, compare...)
// The issure here is that typescript doesn't know that you and I know that this is the only place
// Where we're using sorter (lINKEDLIST, ChracterCollection, NumbersCollection...)). But
// The problem is that typescript doesn't have any indication of that whatsoever typescript is trying to
// to analyze this class in isolation.
// TypeScript은 그냥 여기서 compare and sort method가 어디있지하고 찾는다. 그래서 아래와 같이 에러가발생한다.
// 이 문제를 이해해보자.
// export class Sorter {
//     // constructor(public collection: Sortable) { }
//     sort(): void {
//         const { length } = this;
//         // Abstract-class: The implemented methods can refer to other methods that don't actually exist yet
//         for (let i = 0; i < length; i++) {
//             for (let j = 0; j < length - i - 1; j++) {
//                 if (this.compare(j, j + 1)) {
//                     this.swap(j, j + 1);
//                 }
//             }
//         }
//     }
// }
// collection은 NumbersCollection은 data이기 때문에
// 동일하게 compare, swap method를 사용할 수 있다. 그리고 this.collection 을 이용해 length 를 할당하면
// 자동으로 getter가 그 값을 할당한다.
var Sorter = /** @class */ (function () {
    function Sorter() {
    }
    // It doesn't exist yet but it will at some point time and it's eventually going to be a number
    Sorter.prototype.sort = function () {
        console.log(this);
        var length = this.length;
        for (var i = 0; i < length; i++) {
            for (var j = 0; j < length - i - 1; j++) {
                if (this.compare(j, j + 1)) {
                    this.swap(j, j + 1);
                }
            }
        }
    };
    return Sorter;
}());
exports.Sorter = Sorter;
