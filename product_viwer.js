/*------------------------ crateing variable for width and height ------------------------*/
var product_viwer_total_width = 0;
var product_viwer_imagebox_width = 0;
var product_viwer_imagebox_height = 0;
var indicater_box_width = 0;
var indicater_box_height = 0;
var whole_image_box_width = 0;
var imagebox_detailbox_height = 0;

/*------------------------ crateing variable image number and image_index , move left ------------------------*/
var total_images_box = 0;
var product_viwer_index = 1;
var move_to_left = 0;
/*------------------------ crateing variable for defult setting ------------------------*/
product_viwer_autoPlayInterval = null;
product_viwer_autoPlayTimeout = 2500;

/*------------------------ getting element from html ------------------------*/
product_viwer_mian_box = document.querySelector('.product_viwer_mian_box');
product_image_viwer_ul = document.querySelector('.product_image_viwer_ul');
product_image_viwer_ul_li = document.querySelector('.product_image_viwer_ul li')
product_image_viwer_div = document.querySelector('.product_image_viwer_div');
product_viwer_detail = document.querySelector('.product_viwer_detail');
product_viwer_subview_box = document.querySelector('.product_viwer_subview_box')

/*------------------------ getting total width main element ------------------------*/
product_viwer_total_width = product_viwer_mian_box.offsetWidth;

/*------------------------ getting total number of img present in parent ------------------------*/
total_images_box = product_image_viwer_ul.children.length;

/*------------------------ getting and adding whole width to mainslide element ------------------------*/
whole_image_box_width = product_viwer_total_width * total_images_box;
product_image_viwer_ul.style.width = whole_image_box_width + "px";

/*------------------------ getting responsive height and width for img subbox element ------------------------*/
product_viwer_width_negative_res = product_viwer_total_width/6;
product_viwer_width_res = product_viwer_total_width - product_viwer_width_negative_res;

product_viwer_imagebox_width = product_viwer_width_res;
product_viwer_imagebox_height =product_viwer_width_res;

/*------------------------ getting width from image deatilbox element and adding to mainwhole_box ------------------------*/
imagebox_detailbox_height = product_viwer_detail.offsetHeight;
product_image_viwer_ul.style.height = product_viwer_imagebox_height + imagebox_detailbox_height + "px";

/*------------------------ getting responsive height and width for indicaters element ------------------------*/
indicater_box_width = product_viwer_total_width / total_images_box;
indicater_box_height = product_viwer_total_width / total_images_box

indicater_box_negative_height = indicater_box_height/6;
indicater_box_height = indicater_box_height -indicater_box_negative_height;

/*------------------------crateing and adding  width and height in element using for loop------------------------*/
for (let i = 0; i < total_images_box; i++) {
    /*------------------------adding width and height to image mainbox ------------------------*/
    product_image_viwer_ul.children[i].style.width=product_viwer_total_width+"px"

    /*------------------------adding width and height to image subbox ------------------------*/
    product_image_viwer_ul.children[i].children[0].style.width = product_viwer_imagebox_width + "px";
    product_image_viwer_ul.children[i].children[0].style.height = product_viwer_imagebox_height + "px";
    
    /*------------------------getting src from img for indicaters ------------------------*/
    src = product_image_viwer_ul.children[i].children[0].children[0].getAttribute('src');

    /*------------------------crateing indicaters ------------------------*/
    product_viwer_subview_box.insertAdjacentHTML('beforeend', `<li id="${i}"><img src="${src}"/></li>`);
    
    /*------------------------adding width and height in indicaters ------------------------*/
    product_viwer_subview_box.children[i].style.height = indicater_box_height + "px";
    product_viwer_subview_box.children[i].style.width = indicater_box_width + "px";

    /*------------------------ indicaters on click function to change slide------------------------*/
    product_viwer_subview_box.children[i].addEventListener('click', do_somethin)
    function do_somethin() {
        product_viwer_index = this.id;
        move_to_left = product_viwer_total_width * product_viwer_index;
        product_image_viwer_ul.style.left = - move_to_left + 'px'
    }
}

/*------------------------ autoplay function------------------------*/
product_viwer_autoPlayInterval = window.setInterval(function () {
    if (product_viwer_index >= total_images_box) {
        product_viwer_index = 0;
    }
    move_to_left = product_viwer_total_width * product_viwer_index;
    product_image_viwer_ul.style.left = - move_to_left + 'px'
    product_viwer_index++;
}, product_viwer_autoPlayTimeout);