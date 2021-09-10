import { EcommerceService } from 'app/main/apps/ecommerce/ecommerce.service';
import { Component, OnInit } from "@angular/core";
import { SwiperConfigInterface } from "ngx-swiper-wrapper";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
})
export class HomeComponent implements OnInit {
  constructor(private _ecommerceService: EcommerceService) {
    // Get Related Products
    this._ecommerceService.getRelatedProducts().then(response => {
      this.relatedProducts = response;
    });
  }

  public contentHeader: object;
  public isSlider: boolean = true;
  public relatedProducts;

  public sliders = [
    {
      id: 1,
      image: "assets/images/slider/11.jpg",
      text: "Slide 1",
    },
    {
      id: 1,
      image: "assets/images/slider/12.jpg",
      text: "Slide 21",
    },
    {
      id: 1,
      image: "assets/images/slider/13.jpg",
      text: "Slide 3",
    },
  ];

  public swiperResponsive: SwiperConfigInterface = {
    slidesPerView: 5,
    spaceBetween: 50,
    init: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
    breakpoints: {
      1024: {
        slidesPerView: 3,
        spaceBetween: 40
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 30
      },
      640: {
        slidesPerView: 2,
        spaceBetween: 20
      },
      320: {
        slidesPerView: 1,
        spaceBetween: 10
      }
    }
  };

  // Lifecycle Hooks
  // -----------------------------------------------------------------------------------------------------

  /**
   * On init
   */
  ngOnInit() {
    this.contentHeader = {
      headerTitle: "Home",
      actionButton: true,
      breadcrumb: {
        type: "",
        links: [
          {
            name: "Home",
            isLink: true,
            link: "/",
          },
          {
            name: "Sample",
            isLink: false,
          },
        ],
      },
    };
  }
}
