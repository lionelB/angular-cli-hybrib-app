export class PhoneDetailController {
  static $inject = ['$routeParams', 'Phone'];
  phone: any;
  mainImageUrl: string;

  constructor( private $routeParams, private Phone) {
    this.phone = Phone.get({phoneId: $routeParams.phoneId}, (phone: any) => {
      this.setImage(phone.images[0]);
    });
  }
  setImage(imageUrl: any) {
    this.mainImageUrl = imageUrl;
  }
}

export const phoneDetailComponent = {
  template: require('./phone-detail.template.html'),
  controller: PhoneDetailController
};
