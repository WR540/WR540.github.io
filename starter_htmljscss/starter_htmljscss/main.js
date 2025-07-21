function checkAns()
{
    arrayAns=["A", "B", "C", "D"];
    for (let i = 1; i <= 4; i++)
    {
        checkOneAnswer(i, arrayAns[i - 1]);
    }
    scorebox.innerHTML="Score:"+score;
}
function checkOneAnswer(qNo, option)
{
    
}