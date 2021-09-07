import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Cevap } from './models/cevap';
import { Egitim } from './models/egitim';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation:ViewEncapsulation.None
})


export class AppComponent implements OnInit {
  secilenEgitim:Egitim;
  secilenGeriEgitim:Egitim;
  secilenCevap:Cevap;

  toplamPuan:number = 0;
  mevcutSoru:number = 0;
  egitimaditemp:any;
  sinavBittiMi = false;
  sinavBasladiMi=false;
  sinavBasariliMi=false;
  sinavBasariliMiSonuc:boolean;
  isimgirildimi:boolean=false;
  login:boolean=false;
  videoIzlendiMi:boolean;

  username:string;

  egitimler:Array<Egitim>=[
    {
      id:1,
      egitimAdi:"Banka Egitim",
      soruarray: [
        {
          id:1,
          soru:"1+2 kaçtır",
          cevaplar: [
            {
              id:1,
              cevap:"5 değildir",
              puan:10
            },
            {
              id:2,
              cevap:"4 bence",
              puan:0
            },
            {
              id:3,
              cevap:"5 mi",
              puan:0
            },
            {
              id:4,
              cevap:"6 mi",
              puan:0
            }
          ]
        },
        {
          id:2,
          soru:"2+3 kaçtır",
          cevaplar: [
            {
              id:5,
              cevap:"5 değildir",
              puan:10
            },
            {
              id:6,
              cevap:"4 bence",
              puan:0
            },
            {
              id:7,
              cevap:"5 mi",
              puan:0
            },
            {
              id:8,
              cevap:"6 mi",
              puan:0
            }
          ]
        }
      ]
    },
    {
      id:2,
      egitimAdi:"Cari Hesaplar Egitim",
      soruarray: [
        {
          id:3,
          soru:"2+2 kaçtır",
          cevaplar: [
            {
              id:9,
              cevap:"5 değildir",
              puan:10
            },
            {
              id:10,
              cevap:"4 bence",
              puan:0
            },
            {
              id:11,
              cevap:"5 mi",
              puan:0
            },
            {
              id:12,
              cevap:"6 mi",
              puan:0
            }
          ]
        },
        {
          id:4,
          soru:"2+3 kaçtır",
          cevaplar: [
            {
              id:13,
              cevap:"5 değildir",
              puan:10
            },
            {
              id:14,
              cevap:"4 bence",
              puan:0
            },
            {
              id:15,
              cevap:"5 mi",
              puan:0
            },
            {
              id:16,
              cevap:"6 mi",
              puan:0
            }
          ]
        }
      ]
    },
    {
      id:3,
      egitimAdi:"Cek Senet Egitim",
      soruarray: [
        {
          id:5,
          soru:"3+2 kaçtır",
          cevaplar: [
            {
              id:17,
              cevap:"5 değildir",
              puan:10
            },
            {
              id:18,
              cevap:"4 bence",
              puan:0
            },
            {
              id:19,
              cevap:"5 mi",
              puan:0
            },
            {
              id:20,
              cevap:"6 mi",
              puan:0
            }
          ]
        },
        {
          id:6,
          soru:"2+3 kaçtır",
          cevaplar: [
            {
              id:21,
              cevap:"5 değildir",
              puan:10
            },
            {
              id:22,
              cevap:"4 bence",
              puan:0
            },
            {
              id:23,
              cevap:"5 mi",
              puan:0
            },
            {
              id:24,
              cevap:"6 mi",
              puan:0
            }
          ]
        }
      ]
    },
    {
      id:4,
      egitimAdi:"Gelir Gider Egitim",
      soruarray: [
        {
          id:7,
          soru:"4+2 kaçtır",
          cevaplar: [
            {
              id:25,
              cevap:"5 değildir",
              puan:10
            },
            {
              id:26,
              cevap:"4 bence",
              puan:0
            },
            {
              id:27,
              cevap:"5 mi",
              puan:0
            },
            {
              id:28,
              cevap:"6 mi",
              puan:0
            }
          ]
        },
        {
          id:8,
          soru:"2+3 kaçtır",
          cevaplar: [
            {
              id:29,
              cevap:"5 değildir",
              puan:10
            },
            {
              id:30,
              cevap:"4 bence",
              puan:0
            },
            {
              id:31,
              cevap:"5 mi",
              puan:0
            },
            {
              id:32,
              cevap:"6 mi",
              puan:0
            }
          ]
        }
      ]
    },
    {
      id:5,
      egitimAdi:"Kasa Egitim",
      soruarray: [
        {
          id:9,
          soru:"5+2 kaçtır",
          cevaplar: [
            {
              id:33,
              cevap:"5 değildir",
              puan:10
            },
            {
              id:34,
              cevap:"4 bence",
              puan:0
            },
            {
              id:35,
              cevap:"5 mi",
              puan:0
            },
            {
              id:36,
              cevap:"6 mi",
              puan:0
            }
          ]
        },
        {
          id:10,
          soru:"2+3 kaçtır",
          cevaplar: [
            {
              id:37,
              cevap:"5 değildir",
              puan:10
            },
            {
              id:38,
              cevap:"4 bence",
              puan:0
            },
            {
              id:39,
              cevap:"5 mi",
              puan:0
            },
            {
              id:40,
              cevap:"6 mi",
              puan:0
            }
          ]
        }
      ]
    },
    {
      id:6,
      egitimAdi:"Taksit Takip Egitim",
      soruarray: [
        {
          id:11,
          soru:"6+2 kaçtır",
          cevaplar: [
            {
              id:41,
              cevap:"5 değildir",
              puan:10
            },
            {
              id:42,
              cevap:"4 bence",
              puan:0
            },
            {
              id:43,
              cevap:"5 mi",
              puan:0
            },
            {
              id:44,
              cevap:"6 mi",
              puan:0
            }
          ]
        },
        {
          id:12,
          soru:"2+3 kaçtır",
          cevaplar: [
            {
              id:45,
              cevap:"5 değildir",
              puan:10
            },
            {
              id:46,
              cevap:"4 bence",
              puan:0
            },
            {
              id:47,
              cevap:"5 mi",
              puan:0
            },
            {
              id:48,
              cevap:"6 mi",
              puan:0
            }
          ]
        }
      ]
    }
  ]

  constructor(){}
  
  ngOnInit(): void {
    
  }

  loginpage(){
    this.login=true;
  }
  
  cevapSecme(data:Cevap){
    //this.secilenCevaplarArray.push(data.id);
    this.secilenCevap = data;
  }

  ileri(){
    this.toplamPuan += this.secilenCevap.puan;
    if(this.secilenEgitim.soruarray.length-1 > this.mevcutSoru){
      this.mevcutSoru++;
    }
    else{
      this.sinavBittiMi = true;
      this.sinavBasariliMi=true;

      if(this.toplamPuan<3)
      {
        this.sinavBasariliMiSonuc=false;
      }
      else
      {
        this.sinavBasariliMiSonuc=true;
      }
    }
  }

  anasayfa()
  {
    this.toplamPuan = 0;
    this.mevcutSoru = 0;
    this.egitimaditemp=null;
    this.videoIzlendiMi=false;
    this.sinavBittiMi = false;
    this.sinavBasladiMi=false;
    this.sinavBasariliMi=false;
  }

  basla(data:Egitim){    
    if(this.isimgirildimi==false)
    {
      alert("oturum açınız");
    }
    else
    {
      this.secilenEgitim = data;
      this.egitimaditemp=data.egitimAdi;
      this.sinavBasladiMi=true;
    }
  }

  baslatwo(){
    this.videoIzlendiMi=true;
  }


geridonus(){
    this.sinavBasladiMi=true;
    this.sinavBittiMi=false;
    this.videoIzlendiMi=false;
    this.toplamPuan = 0;
    this.mevcutSoru = 0;
}


  addname(value:string){
    if(value=="")
    {
      alert("lütfen isim giriniz")
    }
    else
    {
      this.username=value;
      this.isimgirildimi=true;
      this.login=false;
    } 
  }
}
