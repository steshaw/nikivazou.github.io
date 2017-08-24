Let `Dependencies` associate a unique program location (ie `?`) (call it source)
with all the locations that decide the solution of the `?` (call these locations targets). 

    type Dependencies val = [(Unique, [(Unique,val)])]

For example, [ ("src-1", [("tg-1-1", 8), ("tg-1-2", 78)])
             , ("src-2", [("tg-3-1", 2), ("tg-3-2", 7), ("tg-3-3",5)]
             , ("src-3", [("tg-3-1", 9)]
             ] :: Dependencies Int


A solution assigns a value to each target

type Solution = Dependencies Value

And there is a complicated Haskell function that checks if the solution is OK

checkSolution :: Solution -> IO Bool 

`Candidates` assigns many alternative values to each target

type Candidates = Dependencies [Value]

and again I have a function that from a source file it can generates the candidates 

getCandidates :: FilePath -> IO Candidates


My goal is to find a "matching" solution, 
ie a solution where **all** the tagrets of the same source have the same value. 
If that does not exist I will relax the **all** and present a solution where
as much targets as possible match, I call it almost matching. 

Because the function checkSolution is expensive and the number of the candidates is huge 
I need user interation. 

GUI
- Presenting & Filtering 
I want to present all the candidates to the user, as in [Gradual.hs.html](https://nikivazou.github.io/static/template/Gradual.hs.html) (press the ? button twice) so that the user can filter out some (non-sensible) solutions. 


- User Solution Selection
Also, I want the user to be able to select a Solution from the Candidates as [Gradual.hs.2.html](https://nikivazou.github.io/static/template/Gradual.hs.2.html) and press a button to check the solution with `checkSolution`.


- Matching solution
Finally I want a a button that when presesed searches for the matching solution, and either reports it, os reports the almost matching ones. 
