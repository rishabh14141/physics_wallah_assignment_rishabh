var di=document.getElementById('1');
var inps = document.querySelectorAll('input');
let arr=[];
//webkitdirectory mozdirectory 
[].forEach.call(inps, function(inp) {
  inp.onchange = function(e) {
    let fdi=document.getElementById('fdi');
    //console.log(this.files.length);
    var n=this.files.length;
    for(var i=0;i<n;i++)
    {
         console.log(this.files[i]);
        // console.log(this.files[i].size);
        let ext=this.files[i].name;
        let j=ext.length-1;
        while(ext.charAt(j)!='.')
        {
            j--;
        }
        j++;
        let res=ext.substr(j);
        console.log(res);
        arr[i]=({size:this.files[i].size,
                name:this.files[i].name,
                extension:res,
        });
    }
    if(n==1)
    {fdi.innerHTML=`${n} file`;}
    else 
    {
      fdi.innerHTML=`${n} files`;
    }
    console.log(arr);
    console.log(arr.length);
    function compare( a, b ) {
        if ( a.extension < b.extension ){
          return -1;
        }
        if ( a.extension > b.extension){
          return 1;
        }
        return 0;
      }
      arr.sort( compare );
    for(let i=0;i<n;i++)
    {
        let y=arr[i].size;
        if(y>=0 && y<1000)
        {   
            arr[i].size=`${y}bytes`;
        }
        if(y>=1000&&y<1000000)
        {  y=y/1000;
            y=y.toFixed(1); 
           arr[i].size=`${y}kB`;
        }
        if(y>=1000000&&y<1000000000)
        {   y=y/1000000;
        y=y.toFixed(1); 
            arr[i].size=`${y}MB`;   
        }
        if(y>=1000000000&&y<1000000000000)
        {y=y/1000000000;
        y=y.toFixed(1); 
            arr[i].size()=`${y}GB`;
        }
        if(y>=1000000000000)
        {    y=y/1000000000000;
        y=y.toFixed(1); 
            arr[i].size()=`${y}TB`;
        }

    }
    di.innerHTML='<div style="display:flex; justify-content:space-between; font-size:20px;font-weight:bold; margin-top:8px;"><div style="margin-left:2%">File Name</div><div style="margin-right: 3%">File Size</div></div>';
    var v='';
    for(let i=0;i<n;i++)
    {console.log(arr[i]);
      if(i%2==0)
    {v+=`<div style="display:flex; justify-content:space-between; font-size:17px;"> 
      <div style="margin-left:2%"> ${arr[i].name}</div>         
      <div style="margin-right: 3%">${arr[i].size}</div>
      </div>`}
      else
      {
        v+=`<div style="display:flex; background-color:grey;justify-content:space-between; font-size:17px;"> 
      <div style="margin-left:2%"> ${arr[i].name}</div>         
      <div style="margin-right: 3%">${arr[i].size}</div>
      </div>`
      }
    }
    di.insertAdjacentHTML('afterend',v);    
  
   };
});
