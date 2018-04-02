  //bannner效果

{       //先获取banner图片，轮播点，左右箭头，最大的banner外框，
	var img=document.querySelectorAll(".banner_img li");
	var dian=document.querySelectorAll(".banner_dian li");
	var  banner=document.querySelector("#banner");
	var left=document.querySelector(".banner_lbtn");
	var right=document.querySelector(".banner_rbtn");

	  dian.forEach(function(ele,index){                         //轮播点的遍历
         ele.onclick=function(){                              //轮播点单击事件
         	for(let i=0;i<dian.length;i++){                      //轮播点循环
         			img[i].classList.remove("active");     //所有轮播点对应img移除active类名
         			dian[i].classList.remove("active");   //所有对应轮播点移除active类名
         	}
         	this.classList.add("active");               //对应轮播点加上active类名
         	img[index].classList.add("active");         //轮播点对应img加上active类名
         	n=index;
         }
	}) ;
	let n=0;                                           //定义变量 n
       let t= setInterval(move,1000);             //-定义变量t等于区间事件
        function move() {                         //区间事件的方法move
            n++;                                   //变量 n自加
            if(n===img.length){                     //判断 n如果=img最大个数
                    n=0;
            }
            if(n<0){n=4;}                           //判断 n如果=0，让n=4
             for(let i=0;i<img.length;i++){          //进入循环
                img[i].classList.remove("active");   //所有轮播点对应img移除active类名
                dian[i].classList.remove("active"); //所有对应轮播点移除active类名
            } img[n].classList.add("active");     //对应轮播点加上active类名
               dian[n].classList.add("active");     //轮播点对应img加上active类名
        }
        banner.onmouseenter=function () {           //banner鼠标移入效果
            clearInterval(t);                         //清除区间事件t
        };
        banner.onmouseleave=function () {           //banner鼠标移出效果
            t=setInterval(move,1000);              //添加区间事件t
        }
        let flag=true;                            //定义变量flag为true

        right.onclick=function(){                  //像右箭头单击事件
            if(flag){                               //如果flag为真，
                flag=false;                  //将flag设置为false，调用move方法
        	     	move();
            }
        };
        left.onclick=function(){             //像左箭头单击事件
            if(flag){                       //如果flag为真，
                flag=false;        //将flag设置为false，将n后退两个，调用move方法
                n-=2;
                 move();
            }

        };
img.forEach(function(ele,index){                  //mg遍历
  ele.addEventListener("transitionend",function(){ //所选择的img添加事件监听，结束事件
       flag=true;                                 //将flag赋值为真
      })
   })
}

//明星单品
{  //获取向左向右按钮，图片外最大的框
  const star_btn1=document.querySelector(".star_btn1");
  const star_btn2=document.querySelector(".start_bt2");
  const star_bottom=document.querySelector(".star_bottom");
  // console.log(star_btn1);
  let n=0;                                        //定义变量n为0
  star_btn2.onclick=function(){          //向右单击事件
         n++;                               //n自加
         // cosole.log(star_btn1);
         star_btn1.classList.remove("disable");//向左按钮移除disable类名
         if(n===2){                               //当n为2时候
            star_btn2.classList.add("disable"); //向右按钮加上disable类名
         }
         if(n===3){                    //当n为3时候
            n=2;                      //将n赋值为2
            return;                  //返回n
         }
        star_bottom.style.marginLeft=-992*n+"px"; //图片向左移动一瓶内容
  }
  star_btn1.onclick=function(){          //左侧单击事件
       n--;
       star_btn2.classList.remove("disable");//向右按钮移除disable类名
       if(n===0){
        star_btn1.classList.add("disable");
       }
       if (n==-1) {
        n=0;
        return;
       }
        star_bottom.style.marginLeft=-992*n+"px";
  }}


//搭配移入
{  //先获取文字，模块。
    function content(parent){                       //对下面事件进行封装
   const dapei_wenzi=parent.querySelectorAll(".dapei_wenzi");
   const dabo=parent.querySelectorAll(".dabo");

   dapei_wenzi.forEach(function(ele,index){            //遍历文字模块
     ele.onmouseenter=function(){                    //移入对应文字模块方法
            for(let i=0;i<dapei_wenzi.length;i++){    //进入循环
                dapei_wenzi[i].classList.remove("activedapei"); //所有文字模块移除类名
                dabo[i].classList.remove("active2");//模块移除类名
            }
            dapei_wenzi[index].classList.add("activedapei");//对应添加类名
            dabo[index].classList.add("active2");
     }
   })
   }
   const contents=document.querySelectorAll(".dapei");//获取所有搭配模块
   content(contents[0]);                            //调用方法传参
   content(contents[1]);
   content(contents[2]);
}


//内容
  { //获取左右按钮，轮播点，轮播图大框
    const neirong_btn1=document.querySelector(".neirong_btn1");
    const neirong_btn2=document.querySelector(".neirong_btn2");
    const neirong1box=document.querySelector(".neirong1box");
    const neirong_dian=document.querySelectorAll(".neirong_dian");
    const neirong1p=document.querySelectorAll(".neirong1p");
     let n=0;
     neirong_btn2.onclick=function(){ //右侧单击事件
         n++;
         if(n===neirong1p.length){           //判断n等于L轮播图个数
            n=neirong1p.length-1;             //n等于轮播图长度-1；
            return;                           //返回n值
         }
        neirong1box.style.marginLeft=-296*n+"px";  //轮播大图座椅
        neirong_dian[n].classList.add("diante"); //轮播点加上类名
        neirong_dian[n-1].classList.remove("diante");  //上一个轮播点移除类名
        obj=neirong_dian[n];              //将当前轮播点赋值给obj
  }

  neirong_btn1.onclick=function(){      //左侧按钮单击事件
       n--;
       if (n==-1) {                     //判断n为-1
        n=0;                         //让n赋值为0
        return;                          //返回n
       }
        neirong_dian[n].classList.add("diante"); //
        neirong_dian[n+1].classList.remove("diante");
        neirong1box.style.marginLeft=-296*n+"px";
        obj=neirong_dian[n];
    }
      let obj=neirong_dian[0];
      neirong_dian.forEach(function(ele,index){  //遍历轮播点
        ele.onclick=function(){              //单击事件
            obj.classList.remove("diante");  //obj对应点移除类名
            this.classList.add("diante");  // 当前添加类名
            obj=ele;                       //当前赋值给obj
             neirong1box.style.marginLeft=index*-296+"px";
             n=index;                //n等于当前值
        }
      })
  }
  banner
  { //获取所有li，所有边栏
    let li=document.querySelectorAll(".banner_nav li");
  let side=document.querySelectorAll(".banner_nav_side");
  li.forEach(function(ele,index){           //遍历li
    ele.onmouseenter=function(){                 //鼠标移入效果
          side[index].style.display="block"; //对应边栏出现
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
        dabox.style.borderTop="1px solid #ccc";

          box[index].style.display="block";
           // box[index].style.opacity=1;
    }
    ele.onmouseleave=function(){
        box[index].style.display="none";   
        dabox.style.height="0px";
        dabox.style.border=" 0";
        
    }
  })

}