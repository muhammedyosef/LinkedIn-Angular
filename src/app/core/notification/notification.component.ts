import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss']
})
export class NotificationComponent implements OnInit {
  userID: string | null = '';
arr:any=[]
  constructor(private fire:AngularFirestore) { }

  ngOnInit(): void {
    this.userID = localStorage.getItem('token');

    this.fire.collection("FriendList").snapshotChanges().subscribe(res=>{
      res.forEach((res1)=>{
        let x: any = res1.payload.doc.data();
        if (x.sendTo == this.userID) {
          this.fire.collection("Posts").snapshotChanges().subscribe(res=>{
            res.forEach((res1)=>{
              let x1: any = res1.payload.doc.data();
              if(x1.ID==x.sendFrom){
                this.arr.push(x1);
              }
            })
          });
        } else if (x.sendFrom == this.userID) {

          this.fire.collection("Posts").snapshotChanges().subscribe(res=>{
            res.forEach((res1)=>{
              let x1: any = res1.payload.doc.data();
              if(x1.ID==x.sendTo){
                this.arr.push(x1);
              }


            })
          });
        }



      })
    });
  }

}
