{
	var img=document.querySelectorAll(".banner_img li");
	var dian=document.querySelectorAll(".banner_dian li");
	var  banner=document.querySelector("#banner");
	var left=document.querySelector(".banner_lbtn");
	var right=document.querySelector(".banner_rbtn");

	  dian.forEach(function(ele,index){
         ele.onclick=function(){
         	for(let i=0;i<dian.length;i++){
         			img[i].classList.remove("active");
         			dian[i].classList.remove("active");
         	}
         	this.classList.add("active");
         	img[index].classList.add("active");
         	n=index;
         }
	})
	let n=0;
       let t= setInterval(move,1000);
        function move() {
            n++;
            if(n===img.length){
                    n=0;
            }
            if(n<0){n=4;}
             for(let i=0;i<img.length;i++){
                img[i].classList.remove("active");
                dian[i].classList.remove("active");
            } img[n].classList.add("active");
               dian[n].classList.add("active");
        }
        banner.onmouseenter=function () {
            clearInterval(t);
        };
        banner.onmouseleave=function () {
            t=setInterval(move,1000);
        }
        let flag=true;

        right.onclick=function(){
            if(flag){
                flag=false;
        		move();
            }
        }
        left.onclick=function(){
            if(flag){
                flag=false;
                n-=2;
                 move();
            }
        	
        }
        img.forEach(function(ele,index){
            ele.addEventListener("transitionend",function(){
                flag=true;
            })
        })
}
//star
{
  const star_btn1=document.querySelector(".star_btn1");
  const star_btn2=document.querySelector(".start_bt2");
  const star_bottom=document.querySelector(".star_bottom");
  // console.log(star_btn1);
  let n=0;
  star_btn2.onclick=function(){
         n++;
         // cosole.log(star_btn1);
         star_btn1.classList.remove("disable");
         if(n===2){
            star_btn2.classList.add("disable");
         }
         if(n===3){
            n=2;
            return;
         }
        star_bottom.style.marginLeft=-992*n+"px";
  }
  star_btn1.onclick=function(){
       n--;
       star_btn2.classList.remove("disable");
       if(n===0){
        star_btn1.classList.add("disable");
       }
       if (n==-1) {
        n=0;
        return;
       }
        star_bottom.style.marginLeft=-992*n+"px";
  }
    
}
//搭配移入
{  
    function content(parent){
   const dapei_wenzi=parent.querySelectorAll(".dapei_wenzi");
   const dabo=parent.querySelectorAll(".dabo");
  
   dapei_wenzi.forEach(function(ele,index){
     ele.onmouseenter=function(){
            for(let i=0;i<dapei_wenzi.length;i++){
                dapei_wenzi[i].classList.remove("active");
                dabo[i].classList.remove("active2");
            }
                dapei_wenzi[index].classList.add("active");
               dabo[index].classList.add("active2");
     }
   })
   }
   const contents=document.querySelectorAll(".dapei");
   content(contents[0]);
   content(contents[1]);
   content(contents[2]);

}
//内容
  {
    const neirong_btn1=document.querySelector(".neirong_btn1");
    const neirong_btn2=document.querySelector(".neirong_btn2");
    const neirong1box=document.querySelector(".neirong1box");
    const neirong_dian=document.querySelectorAll(".neirong_dian");
    const neirong1p=document.querySelectorAll(".neirong1p");
     let n=0;
     neirong_btn2.onclick=function(){
         n++;
         if(n===neirong1p.length){
            n=neirong1p.length-1;
            return;
         }
        neirong1box.style.marginLeft=-296*n+"px";
        neirong_dian[n].classList.add("diante");
        neirong_dian[n-1].classList.remove("diante");
        obj=neirong_dian[n];
  }
  neirong_btn1.onclick=function(){
       n--;
       if (n==-1) {
        n=0;
        return;
       }
        neirong_dian[n].classList.add("diante");
        neirong_dian[n+1].classList.remove("diante");
        neirong1box.style.marginLeft=-296*n+"px";
        obj=neirong_dian[n];
    }
      let obj=neirong_dian[0];
      neirong_dian.forEach(function(ele,index){
        ele.onclick=function(){
            obj.classList.remove("diante");
            this.classList.add("diante");
            obj=ele;
             neirong1box.style.marginLeft=index*-296+"px";
             n=index;
        }
      })
  }
  //banner
  {let li=document.querySelectorAll(".banner_nav li");
  let side=document.querySelectorAll(".banner_nav_side");
  li.forEach(function(ele,index){
    ele.onmouseenter=function(){
          side[index].style.display="block";
    }
    ele.onmouseleave=function(){
        side[index].style.display="none";
    }
  })

}
  {let nav=document.querySelectorAll(".nav_xiao");
  let box=document.querySelectorAll(".nav_bot");
  let dabox=document.querySelector(".nav_botbox");
  nav.forEach(function(ele,index){
    ele.onmouseenter=function(){
        dabox.style.height="300px";
          box[index].style.display="block";
           box[index].style.opacity=1;
    }
    ele.onmouseleave=function(){
        box[index].style.display="none";   
        dabox.style.height="0px";

    }
  })

}