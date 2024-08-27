let displayHTML = ``;
let i,j;
let temp=1;
for( i=0;i<3;i++)
{
    displayHTML+=`
     <div class="row">`;
     for( j=0;j<3;j++)
     {
       displayHTML+=`
        <div class="column" class="10*i+j" onclick="   
    play(this,${i},${j});
      " ></div>
       `;
     }          
       displayHTML+=`</div>`;
    
}


document.querySelector(".grid").innerHTML = displayHTML;

function play(element,i,j)
{
    if(element.innerText === "")
    {
        if(temp)
            {
             element.innerText = "X";
             temp=0;
             let res = isWin(i,j,1);
            if(res!=0)
            {
              document.querySelector(".result").innerText = `${res}  Win, PLEASE RESET THE GAME` ;
              // reset();
            }
            } else {
               element.innerText = "O";
             temp=1;
             let res = isWin(i,j,0);
            if(res!=0)
            {
              document.querySelector(".result").innerText = `${res}  WIN , PLEASE RESET THE GAME` ;
              // reset();
            }
            }
    }

}

let arr=[
  [2,2,2],
  [2,2,2],
  [2,2,2]
];
function isWin(i,j,v){
    arr[i][j]=v;
    let temp=1;
    for(let k=0;k<2;k++)
    {
        if(arr[k][k]==2 || arr[k][k] != arr[k+1][k+1])
      {
        temp=0;
        break;
      }
  }
  if(temp)
  {
    if(arr[0][0])
      return 'X';
    else
    return 'O';
}

temp =1;
for(let k=0;k<2;k++)
  {
      if(arr[k][2-k]==2 || arr[k][2-k] != arr[k+1][2-k-1])
    {
      temp=0;
      break;
    }
}
if(temp)
{
  if(arr[0][2])
    return 'X';
  else
  return 'O';
}


for(let k=0;k<3;k++)
  {
    temp = 1;
      for(let op=0;op<2;op++)
      {
        if(arr[k][op]==2 || arr[k][op] != arr[k][op+1])
          {
            temp=0;
            break;
          }
      }
if(temp)
{
  if(arr[k][0])
    return 'X';
  else
  return 'O';
}
  }

for(let k=0;k<3;k++)
  {
    temp = 1;
     for(let op=0;op<2;op++)
     {
      if(arr[op][k]==2 || arr[op][k] != arr[op+1][k])
        {
          temp=0;
          break;
        }
     }
if(temp)
{
  if(arr[0][k])
    return 'X';
  else
  return 'O';
}
}

  for(let g=0;g<3;g++)
    {
      for(let h=0;h<3;h++)
      {
        if(arr[g][h] == 2)
      return 0;   
      }
    }
  
    document.querySelector(".result").innerText = " TIE , PLEASE REST THE GAME" ;
    return 0;
}


function reset(){
  arr=[
    [2,2,2],
    [2,2,2],
    [2,2,2]
  ];
 temp = 1 ;
  document.querySelectorAll(".column").forEach(box => {
     box.textContent = "";
   document.querySelector(".result").innerHTML = "";
  });

}
