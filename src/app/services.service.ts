import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  constructor() { }
  img="https://apollo-singapore.akamaized.net/v1/files/in8yre223tn11-IN/image;s=1080x1080";
  img2="https://apollo-singapore.akamaized.net/v1/files/ies6n8asbrns2-IN/image;s=1080x1080";
  img3="https://apollo-singapore.akamaized.net/v1/files/nuua1jefni5v2-IN/image;s=1080x1080"
  img4="https://apollo-singapore.akamaized.net/v1/files/7mrm0f6xlqyn-IN/image;s=1080x1080"
  img5="https://apollo-singapore.akamaized.net/v1/files/ch1t6derkxdk3-IN/image;s=1080x1080"
  img6="https://apollo-singapore.akamaized.net/v1/files/ei69fp754v971-IN/image;s=1080x1080"
  img7="https://apollo-singapore.akamaized.net/v1/files/2sydll6y4sqy-IN/image;s=1080x1080"
  img8="https://apollo-singapore.akamaized.net/v1/files/nazlvaavr7n5-IN/image;s=1080x1080"
  img9="https://apollo-singapore.akamaized.net/v1/files/dro8uw3rd2of-IN/image;s=1080x1080"
  img10="https://apollo-singapore.akamaized.net/v1/files/1iksoad614du1-IN/image;s=1080x1080"
  img11="https://apollo-singapore.akamaized.net/v1/files/4donkquk8mjl-IN/image;s=1080x1080"
  img12="https://apollo-singapore.akamaized.net/v1/files/yvosucu0qj6n-IN/image;s=1080x1080"

bikes=[
  {name:'pulser 200rs',price:155000,date:'01-02-2019',discription:'Engine CC 411 cc. No Of Cylinder 1. Max Power 24.5 bhp @ 6500 rpm. Max Torque 32 Nm @ 4250 rpm',location:'Alwal, Hyderabad, Telangana',image:this.img2},
  {name:'pulser 220F',price:125000,date:'01-02-2019',discription:'Engine CC 411 cc. No Of Cylinder 1. Max Power 24.5 bhp @ 6500 rpm. Max Torque 32 Nm @ 4250 rpm',location:'South , Kolkata, West Bengal',image:this.img},
  {name:'hero splender plus',price:60000,date:'01-02-2019',discription:'Engine CC 411 cc. No Of Cylinder 1. Max Power 24.5 bhp @ 6500 rpm. Max Torque 32 Nm @ 4250 rpm',location:'Hafeez Nagar, Hyderabad, Telangana',image:this.img3},
  {name:'duke 200',price:175000,date:'01-02-2019',discription:'Engine CC 411 cc. No Of Cylinder 1. Max Power 24.5 bhp @ 6500 rpm. Max Torque 32 Nm @ 4250 rpm',location:'Hanuman , Hyderabad Telangana',image:this.img4},
  {name:'passion plus',price:75000,date:'01-02-2019',discription:'Engine CC 411 cc. No Of Cylinder 1. Max Power 24.5 bhp @ 6500 rpm. Max Torque 32 Nm @ 4250 rpm',location:'Misri Gunj, Hyderabad, Telangana  ',image:this.img5},
  {name:"FZ-S",date:'01-02-2019',price:112000,discription:'Engine CC 411 cc. No Of Cylinder 1. Max Power 24.5 bhp @ 6500 rpm. Max Torque 32 Nm @ 4250 rpm',location:'West Nagar, Chennai, Tamil Nadu',image:this.img6},
  {name:'RE Himalayan ',price:215000,date:'01-02-2019',discription:'Engine CC 411 cc. No Of Cylinder 1. Max Power 24.5 bhp @ 6500 rpm. Max Torque 32 Nm @ 4250 rpm',location:'Andheri West, Mumbai, Maharashtra  ',image:this.img7},
  {name:'RE Electra',price:145000,date:'01-02-2019',discription:'Engine CC 411 cc. No Of Cylinder 1. Max Power 24.5 bhp @ 6500 rpm. Max Torque 32 Nm @ 4250 rpm',location:'Kadambar,  Manjeshwar, Kerala  ',image:this.img8},
  {name:'RE Classic',price:164000,date:'01-02-2019',discription:'Engine CC 411 cc. No Of Cylinder 1. Max Power 24.5 bhp @ 6500 rpm. Max Torque 32 Nm @ 4250 rpm',location:'Kalyan East, Mumbai, Maharashtra  ',image:this.img9},
  {name:'RE himalayan',price:220000,date:'01-02-2019',discription:'Engine CC 411 cc. No Of Cylinder 1. Max Power 24.5 bhp @ 6500 rpm. Max Torque 32 Nm @ 4250 rpm',location:'Thane West, Thane, Maharashtra  ',image:this.img10},
  {name:'suzuki access',price:55000,date:'01-02-2019',discription:'Engine CC 411 cc. No Of Cylinder 1. Max Power 24.5 bhp @ 6500 rpm. Max Torque 32 Nm @ 4250 rpm',location:'J C Nagar, Bengaluru, Karnataka',image:this.img11},
  {name:'kawasaki ninja',price:215000,date:'01-02-2019',discription:'Engine CC 411 cc. No Of Cylinder 1. Max Power 24.5 bhp @ 6500 rpm. Max Torque 32 Nm @ 4250 rpm',location:'Hanuman , Hyderabad Telangana',image:this.img12}
]
}

