var timer
function OpenCloseMenu(event) {
  menuicon = document.getElementById("MenuIcon");
  closeicon = document.getElementById("CloseIcon");
  navigationmenu = document.getElementsByClassName("NavigationMenu")[0];
  

  if (menuicon.style.display == 'block') {
    menuicon.style.display = 'none';
    closeicon.style.display = 'block';
    navigationmenu.style.display = 'block';
  } else {
    menuicon.style.display = 'block';
    closeicon.style.display = 'none';
    navigationmenu.style.display = 'none';
  }
}

function showImageLabel(event){
  target=event.currentTarget;
  label = target.getElementsByClassName("imageLabel")[0];
  label.style.visibility = 'visible';
  label.style.opacity = 1;
}

function hideImageLabel(event){
  target=event.currentTarget;
  label = target.getElementsByClassName("imageLabel")[0];
  label.style.visibility = 'hidden';
  label.style.opacity = 0;
}

function ShowMenu(event, type) {
  var target = event.currentTarget;
  console.log(type)
  
  
  if (!(event.currentTarget.className == "PopupMenu" & event.target.tagName == "I")){
    if (event.currentTarget.tagName == "I" & event.target.tagName == "I"){
      target = event.currentTarget.parentElement;
    }
    ChevronUpIcon = document.getElementById("ChevronUpIcon");
    ChevronDownIcon = document.getElementById("ChevronDownIcon");
    if (getComputedStyle(ChevronDownIcon).getPropertyValue("display") == 'block' & type==2){
      ChevronDownIcon.style.display = 'none';
      ChevronUpIcon.style.display = 'block';
    }
    
    if ( ($(window).width() < 600 & type==2) |
         ($(window).width() > 600 & type==1)){
          menuHeader = target.getElementsByClassName('TopNav')[0];
          menuList = target.getElementsByClassName('MenuList')[0];
          menuItemFirst = target.getElementsByClassName('MenuItemFirst')[0].getElementsByTagName("a")[0];
          menuHeader.style.display = "none";
          menuList.style.display = "block";
          menuItemFirst.style.color= 'grey';
          clearInterval(timer)
       }
  }  
}

function HideMenu(event, type) {
  console.log(type)
  var target = event.currentTarget;
  function _hide(){
    menuHeader = target.getElementsByClassName('TopNav')[0];
    menuList = target.getElementsByClassName('MenuList')[0];
    menuItemFirst = target.getElementsByClassName('MenuItemFirst')[0].getElementsByTagName("a")[0];
    menuHeader.style.display = "block";
    menuList.style.display = "none";
  }

  if (!(event.currentTarget.className == "PopupMenu" & event.target.tagName == "I")){

    if (event.currentTarget.tagName == "I" & event.target.tagName == "I"){
      target = event.currentTarget.parentElement;
      _hide()
    } else {
      if ( ($(window).width() < 600 & type==2) |
      ($(window).width() > 600 & type==1)){
      timer = setTimeout(_hide, 500)
      }
    }
    ChevronUpIcon = document.getElementById("ChevronUpIcon");
    ChevronDownIcon = document.getElementById("ChevronDownIcon");
    if (getComputedStyle(ChevronUpIcon).getPropertyValue("display") == 'block' & type==2){
      ChevronDownIcon.style.display = 'block';
      ChevronUpIcon.style.display = 'none';
    }
  }  
}
