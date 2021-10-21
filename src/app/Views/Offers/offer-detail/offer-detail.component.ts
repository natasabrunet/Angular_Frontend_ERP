import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { OffersService } from 'src/app/Services/offers.service';


@Component({
  selector: 'app-offer-detail',
  templateUrl: './offer-detail.component.html',
  styleUrls: ['./offer-detail.component.scss']
})
export class OfferDetailComponent implements OnInit {

  id: string;
  description: string;
  discount: number;
  start_date: string;
  end_date: string;
  paid_quantity: number;
  free_quantity: number;
  showAlert: boolean = false;
  success: boolean = false;
  alertMessage: string;

  form: FormGroup;

  constructor(
    private activatedRoute: ActivatedRoute,
    private offersService: OffersService,
    private router: Router,
    private fb: FormBuilder

  ) { 
    this.createForm();
  }

  ngOnInit(): void {
     //Recuperamos el parámetro (id) de la oferta y cargamos su info
     this.activatedRoute.params.subscribe((params) => {
      this.loadOffer(params['id']);
    });
  }

  loadOffer(id: string) {
    this.offersService.getOfferById(id).subscribe(
      (data: any) => {
        console.log("DATA");
        console.log(data);
        if (!data) {
          this.router.navigateByUrl('offers'); // redirect to offers-list
        } else {
          this.id = id; //Guardamos el ID para poder usarlo en todo el componente (necesario para update y delete)
          this.description = data.object.description;
          this.discount = data.object.discount;
          this.start_date = data.object.starts_on;
          this.end_date = data.object.ends_on;
          this.paid_quantity = data.object.paid_quantity;
          this.free_quantity = data.object.free_quantity;

          this.form.get('id').setValue(this.id);
          this.form.get('description').setValue(this.description);
          this.form.get('discount').setValue(this.discount);
          this.form.get('start_date').setValue(this.start_date);
          this.form.get('end_date').setValue(this.end_date);
          this.form.get('paid_quantity').setValue(this.paid_quantity);
          this.form.get('free_quantity').setValue(this.free_quantity);
        }
      },
      (err) => {
        console.log(err);
        // this.showAlert = true;
        // this.success = false;
        // this.returnMessage = err.error;
      }
    ); //Llamamos al servicio que accede a la API para recuperar la info de la oferta y lo movemos a la propiedad offers para que se cargue en la vista
  }
  createForm() {
    this.form = this.fb.group({
      id: [this.id, [Validators.required]],
      description: [this.description, [Validators.required]],
      discount: [this.discount, [Validators.required]],
      start_date: [this.start_date, [Validators.required]],
      end_date: [this.end_date, [Validators.required]],
      paid_quantity: [this.paid_quantity, [Validators.required]],
      free_quantity: [this.free_quantity, [Validators.required]],
    })
  }
  get isIdInvalid() {
    return this.form.get('id').invalid && this.form.get('id').touched;
  }
  get isDescriptionInvalid() {
    return this.form.get('description').invalid && this.form.get('description').touched;
  }
  get isDiscountInvalid() {
    return this.form.get('discount').invalid && this.form.get('discount').touched;
  }
  get isStartDateInvalid() {
    return this.form.get('start_date').invalid && this.form.get('start_date').touched;
  }
  get isEndDateInvalid() {
    return this.form.get('end_date').invalid && this.form.get('end_date').touched;
  }
  get isPaidQuantityInvalid() {
    return this.form.get('paid_quantity').invalid && this.form.get('paid_quantity').touched;
  }
  get isFreeQuantityInvalid() {
    return this.form.get('free_quantity').invalid && this.form.get('free_quantity').touched;
  }
  submit() {
    if (this.form.invalid) {
      // Si el form es inválido, márcamos los controles como "touched" para que se marquen/muestren los errores
      return Object.values(this.form.controls).forEach((control) => {
        control.markAsTouched();
        console.log(Object.values);
      });
    }
    //this.updateOffer();
  }
}
