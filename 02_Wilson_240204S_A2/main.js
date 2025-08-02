//target all elements to save to constants
const page1btn=document.querySelector("#pageWhite");
const page2btn=document.querySelector("#pageBlack");
const page3btn=document.querySelector("#speedQuiz");
const cont1=document.querySelector("#c1");
const cont2=document.querySelector("#c2");
const cont3=document.querySelector("#c3");
function initHide()
{
cont1.style.display="none";
cont2.style.display="none";
cont3.style.display="none";
}
/*Listen for clicks on the buttons, assign anonymous
eventhandler functions to call show function*/
page1btn.addEventListener("click", function ()
{
initHide(); //reset display
cont1.style.display="block";
});
page2btn.addEventListener("click", function ()
{
initHide();
cont2.style.display="block";
});
page3btn.addEventListener("click", function ()
{
initHide();
cont3.style.display="block";
});
initHide(); //call hideall function to hide all pages