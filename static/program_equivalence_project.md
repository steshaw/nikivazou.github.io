
Correctness of Program Transformations
======================================

In [Richard Bird](http://www.clyce.net/wp-content/uploads/2013/02/Pearls-of-Functional-Algorithm-Design.pdf)'s book "Pearls of Functional Algorithm Design"  there are many program transformations 
that make your program run faster. For example chapter 16 starts with a simple string matching function
which it gradually transformed for runtime optimization. But all these transformations are not formally 
proven correct. 

Liquid Haskell can be used to formally prove correctness of these transformations, 
by porting paper-and-pencil style proofs into Haskell code. 
For example, we proved that 
- [the fibonacci functions is increasing](https://ucsd-progsys.github.io/liquidhaskell-blog/2016/09/18/refinement-reflection.lhs/), 
- [list appending is associative](https://ucsd-progsys.github.io/liquidhaskell-blog/2016/10/06/structural-induction.lhs/), 
- [correctness of MapReduce](http://goto.ucsd.edu/~nvazou/UoA16/07-mapReduce.html), and
- [correctness of string matching parallelization](https://nikivazou.github.io/static/icfp17/a-tale.pdf).

The code for the correctness of string matching can be found [here](https://github.com/nikivazou/verified_string_matching/tree/master/src). 
Since most of these proofs are "boring", we implemented a proof automation technique that we call *Proof by Symbolic Evaluation (PSE)* 
that simplifies most proofs. See [here](https://github.com/ucsd-progsys/liquidhaskell/blob/e97831d2f1928e4c39e3e244cb820079aa7c99c8/README.md#proof-automation)
for how to activate PSE, but remember that it is in an experimental stage!

The goal of this project is to use Liquid Haskell encode Bird's style transformations 
(e.g., optimization of string matching as described in Chapter 16 of Bird's book) and prove them correct, 
i.e., prove that the initial simple program and the optimized one will always return the same result. 
