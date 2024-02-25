jQuery(function ($) {
  'use strict';

  /* ----------------------------------------------------------- */
  /*  Fixed header
	/* ----------------------------------------------------------- */
  $(window).on('scroll', function () {
    // fixedHeader on scroll
    function fixedHeader() {
      var headerTopBar = $('.top-bar').outerHeight();
      var headerOneTopSpace = $('.header-one .logo-area').outerHeight();

      var headerOneELement = $('.header-one .site-navigation');
      var headerTwoELement = $('.header-two .site-navigation');

      if ($(window).scrollTop() > headerTopBar + headerOneTopSpace) {
        $(headerOneELement).addClass('navbar-fixed');
        $('.header-one').css('margin-bottom', headerOneELement.outerHeight());
      } else {
        $(headerOneELement).removeClass('navbar-fixed');
        $('.header-one').css('margin-bottom', 0);
      }
      if ($(window).scrollTop() > headerTopBar) {
        $(headerTwoELement).addClass('navbar-fixed');
        $('.header-two').css('margin-bottom', headerTwoELement.outerHeight());
      } else {
        $(headerTwoELement).removeClass('navbar-fixed');
        $('.header-two').css('margin-bottom', 0);
      }
    }
    fixedHeader();

    // Count Up
    function counter() {
      var oTop;
      if ($('.counterUp').length !== 0) {
        oTop = $('.counterUp').offset().top - window.innerHeight;
      }
      if ($(window).scrollTop() > oTop) {
        $('.counterUp').each(function () {
          var $this = $(this),
            countTo = $this.attr('data-count');
          $({
            countNum: $this.text()
          }).animate(
            {
              countNum: countTo
            },
            {
              duration: 1000,
              easing: 'swing',
              step: function () {
                $this.text(Math.floor(this.countNum));
              },
              complete: function () {
                $this.text(this.countNum);
              }
            }
          );
        });
      }
    }
    counter();

    // scroll to top btn show/hide
    function scrollTopBtn() {
      var scrollToTop = $('#back-to-top'),
        scroll = $(window).scrollTop();
      if (scroll >= 50) {
        scrollToTop.fadeIn();
      } else {
        scrollToTop.fadeOut();
      }
    }
    scrollTopBtn();
  });

  $(document).ready(function () {
    // navSearch show/hide
    function navSearch() {
      $('.nav-search').on('click', function () {
        $('.search-block').fadeIn(350);
      });
      $('.search-close').on('click', function () {
        $('.search-block').fadeOut(350);
      });
    }
    navSearch();

    // navbarDropdown
    function navbarDropdown() {
      if ($(window).width() < 992) {
        $('.site-navigation .dropdown-toggle').on('click', function () {
          $(this).siblings('.dropdown-menu').animate(
            {
              height: 'toggle'
            },
            300
          );
        });

        var navbarHeight = $('.site-navigation').outerHeight();
        $('.site-navigation .navbar-collapse').css(
          'max-height',
          'calc(100vh - ' + navbarHeight + 'px)'
        );
      }
    }
    navbarDropdown();

    // back to top
    function backToTop() {
      $('#back-to-top').on('click', function () {
        $('#back-to-top').tooltip('hide');
        $('body,html').animate(
          {
            scrollTop: 0
          },
          800
        );
        return false;
      });
    }
    backToTop();

    // banner-carousel
    function bannerCarouselOne() {
      $('.banner-carousel.banner-carousel-1').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        dots: true,
        speed: 600,
        arrows: true,
        prevArrow:
          '<button type="button" class="carousel-control left" aria-label="carousel-control"><i class="fas fa-chevron-left"></i></button>',
        nextArrow:
          '<button type="button" class="carousel-control right" aria-label="carousel-control"><i class="fas fa-chevron-right"></i></button>'
      });
      $('.banner-carousel.banner-carousel-1').slickAnimation();
    }
    bannerCarouselOne();

    // banner Carousel Two
    function bannerCarouselTwo() {
      $('.banner-carousel.banner-carousel-2').slick({
        fade: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        dots: false,
        speed: 600,
        arrows: true,
        prevArrow:
          '<button type="button" class="carousel-control left" aria-label="carousel-control"><i class="fas fa-chevron-left"></i></button>',
        nextArrow:
          '<button type="button" class="carousel-control right" aria-label="carousel-control"><i class="fas fa-chevron-right"></i></button>'
      });
    }
    bannerCarouselTwo();

    // pageSlider
    function pageSlider() {
      $('.page-slider').slick({
        fade: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        dots: false,
        speed: 600,
        arrows: true,
        prevArrow:
          '<button type="button" class="carousel-control left" aria-label="carousel-control"><i class="fas fa-chevron-left"></i></button>',
        nextArrow:
          '<button type="button" class="carousel-control right" aria-label="carousel-control"><i class="fas fa-chevron-right"></i></button>'
      });
    }
    pageSlider();

    // Shuffle js filter and masonry
    function projectShuffle() {
      if ($('.shuffle-wrapper').length !== 0) {
        var Shuffle = window.Shuffle;
        var myShuffle = new Shuffle(
          document.querySelector('.shuffle-wrapper'),
          {
            itemSelector: '.shuffle-item',
            sizer: '.shuffle-sizer',
            buffer: 1
          }
        );
        $('input[name="shuffle-filter"]').on('change', function (evt) {
          var input = evt.currentTarget;
          if (input.checked) {
            myShuffle.filter(input.value);
          }
        });
        $('.shuffle-btn-group label').on('click', function () {
          $('.shuffle-btn-group label').removeClass('active');
          $(this).addClass('active');
        });
      }
    }
    projectShuffle();

    // testimonial carousel
    function testimonialCarousel() {
      $('.testimonial-slide').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        speed: 600,
        arrows: false
      });
    }
    testimonialCarousel();

    // team carousel
    function teamCarousel() {
      $('.team-slide').slick({
        dots: false,
        infinite: false,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 2,
        arrows: true,
        prevArrow:
          '<button type="button" class="carousel-control left" aria-label="carousel-control"><i class="fas fa-chevron-left"></i></button>',
        nextArrow:
          '<button type="button" class="carousel-control right" aria-label="carousel-control"><i class="fas fa-chevron-right"></i></button>',
        responsive: [
          {
            breakpoint: 992,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3
            }
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2
            }
          },
          {
            breakpoint: 481,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      });
    }
    teamCarousel();

    // media popup
    function mediaPopup() {
      $('.gallery-popup').colorbox({
        rel: 'gallery-popup',
        transition: 'slideshow',
        innerHeight: '500'
      });
      $('.popup').colorbox({
        iframe: true,
        innerWidth: 600,
        innerHeight: 400
      });
    }
    mediaPopup();

    // Append armada data
    function appendArmadaData() {
      const contact =
        'https://api.whatsapp.com/send/?phone=6281331402031&text=Halo+Wijaya+Trans&type=phone_number&app_absent=0';

      const keterangan = [
        'Sudah termasuk Mobil + Driver',
        'Tidak Termasuk Tol, Parkir, Makan Supir',
        'Pelayanan mulai jam 07.00 - 22.00',
        'Batu untuk luar kota ada tambahan biaya (Over Area)',
        'Harga tidak berlaku pada high season'
      ];

      let data = [
        {
          image: 'images/armada/Xenia-Facelift-WT.png',
          carType: {
            brandName: 'Avanza Xenia',
            factoryName: ''
          },
          price: 'Rp.400.000,-',
          contact,
          keterangan
        },
        {
          image: 'images/armada/New-Avanza-WT.png',
          carType: {
            brandName: 'New Avanza Xenia',
            factoryName: ''
          },
          price: 'Rp.450.000,-',
          contact,
          keterangan
        },
        {
          image: 'images/armada/Xpander-WT.png',
          carType: {
            brandName: 'Xpander',
            factoryName: ''
          },
          price: 'Rp.450.000,-',
          contact,
          keterangan
        },
        {
          image: 'images/armada/Innova-Reborn-WT.png',
          carType: {
            brandName: 'Innova Reborn',
            factoryName: ''
          },
          price: 'Rp.600.000,-',
          contact,
          keterangan
        },
        {
          image: 'images/armada/Hiace-Commuter-WT.png',
          carType: {
            brandName: 'Hiace Commuter',
            factoryName: ''
          },
          price: 'Rp.1.150.000,-',
          contact,
          keterangan: [...keterangan, 'Sudah termasuk bbm']
        },
        {
          image: 'images/armada/ELF-WT.png',
          carType: {
            brandName: 'Elf Giga',
            factoryName: ''
          },
          price: 'Rp.1.250.000,-',
          contact,
          keterangan: [...keterangan, 'Sudah termasuk bbm']
        },
        {
          image: 'images/armada/Hiace-Premio.png',
          carType: {
            brandName: 'Hiace Premio',
            factoryName: ''
          },
          price: 'Rp.1.250.000,-',
          contact,
          keterangan: [...keterangan, 'Sudah termasuk bbm']
        },
        {
          image: 'images/armada/Bus-WT.png',
          carType: {
            brandName: 'Bus (Big / Medium)',
            factoryName: ''
          },
          price: '-',
          contact,
          keterangan
        }
      ];

      for (let index = 0; index < data.length; index++) {
        $('#armada-kami').append(`
        <div class="col-lg-4 col-md-6 mb-4" style="margin-top:20px">
          <div class="latest-post">
            <div class="latest-post-media">
              <a href="#" class="latest-post-img">
                <img
                  loading="lazy"
                  class="img-fluid"
                  src="${data[index].image}"
                  alt="img"
                />
              </a>
            </div>
            <div class="post-body">
              <h4 class="post-title">
                <a href="#" class="d-inline-block">${
                  data[index].carType.brandName
                }</a>
              </h4>
              <div style="margin-top: 10px;">
              ${data[index].keterangan
                .map(item => `<a class="d-inline-block">• ${item}</a>`)
                .join('')}
              </div>
              <div style="margin-top: 15px">
                <div class="container">
                  <div class="row" style="height:45px;justify-content:space-between">
                    <div class="col col-lg-6 col-md-6 col-sm-6 col-xs-6" style="display:flex;align-items: center;">
                      <button type="button" class="btn btn-outline-primary disabled" style="background-color:transparent;">
                        <a class="text-center" style="font-weight:bold">
                          ${data[index].price}
                        </a>
                      </button>
                    </div>
                    <div class="col col-lg-6 col-md-6 col-sm-6 col-xs-6" style="display:flex;align-items: center;">
                      <button id="hubungi-kami" type="button" class="btn btn-primary" style="background-color:#7800ff;">
                        <a class="text-center">
                          Hubungi Kami
                        </a>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    `);
      }
    }
    appendArmadaData();
  });

  $(document).on('click', '#hubungi-kami', function () {
    window.open(
      'https://api.whatsapp.com/send/?phone=6281331402031&text=Halo+Wijaya+Trans&type=phone_number&app_absent=0'
    );
  });
});
