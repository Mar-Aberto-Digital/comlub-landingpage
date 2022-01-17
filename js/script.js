window.onscroll = function () {
  rolagem();
};

function rolagem() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementsByTagName('header')[0].style.padding = '10px 5px';
    document.getElementById('logo').style.fontSize = '25px';
  } else {
    document.getElementsByTagName('header')[0].style.padding = '80px 5px';
    document.getElementById('logo').style.fontSize = '35px';
  }
}
