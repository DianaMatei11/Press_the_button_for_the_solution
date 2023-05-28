import { Component, Input } from '@angular/core';
import { Probleme } from '../Models/Probleme';
@Component({
  selector: 'app-rezolvare-problema',
  templateUrl: './rezolvare-problema.component.html',
  styleUrls: ['./rezolvare-problema.component.css']
})
export class RezolvareProblemaComponent {

  @Input() problema: Probleme;
  rezultat:number;
  nrProblema:number;
  numberString = `73167176531330624919225119674426574742355349194934
  96983520312774506326239578318016984801869478851843
  85861560789112949495459501737958331952853208805511
  12540698747158523863050715693290963295227443043557
  66896648950445244523161731856403098711121722383113
  62229893423380308135336276614282806444486645238749
  30358907296290491560440772390713810515859307960866
  70172427121883998797908792274921901699720888093776
  65727333001053367881220235421809751254540594752243
  52584907711670556013604839586446706324415722155397
  53697817977846174064955149290862569321978468622482
  83972241375657056057490261407972968652414535100474
  82166370484403199890008895243450658541227588666881
  16427171479924442928230863465674813919123162824586
  17866458359124566529476545682848912883142607690042
  24219022671055626321111109370544217506941658960408
  07198403850962455444362981230987879927244284909188
  84580156166097919133875499200524063689912560717606
  05886116467109405077541002256983155200055935729725
  71636269561882670428252483600823257530420752963450`.replace(/\s/g, '');
  constructor(){};

  public solveProblem(){
    let sum = 0;
    for (let i = 1; i < 1000; i++) {
      if (i % 3 === 0 || i % 5 === 0) {
        sum += i;
      }
    }
    this.rezultat= sum;
  }

  public smallestDivisible():number {
    let n = 20;
    while (true) {
      let divisible = true;
      for (let i = 1; i <= 20; i++) {
        if (n % i !== 0) {
          divisible = false;
          break;
        }
      }
      if (divisible) {
        this.rezultat=n;
        return 0;
      }
      n++;
    }
  }
  
  findLargestProduct() {
    let largestProduct = 0;
    let largestProductDigits = '';

    let i = 0;
    while (i < this.numberString.length - 12) {
      const digits = this.numberString.substring(i, i + 13);
      const product = digits.split('').reduce((acc, digit) => acc * Number(digit), 1);

      if (product > largestProduct) {
        largestProduct = product;
        largestProductDigits = digits;
      }

      i++;
    }
    this.rezultat=0;
    this.rezultat= largestProduct;
  }
  
  public ChooseProblem()
  {
    if(this.problema.id==1)
      {
        this.nrProblema=1;
        this.solveProblem();
      }
    else if(this.problema.id==2)
      {
        this.nrProblema=2;
        this.smallestDivisible();
      }
    else if(this.problema.id==3)
      {
       this.nrProblema=3;
        this.findLargestProduct();
      }
  }

}
