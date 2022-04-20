import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { User } from 'src/app/_models/registerUser.model';
import { UserServiceService } from 'src/app/_services/user-service.service';
import { PostServiceService } from 'src/app/_services/post-service.service';
import { Post } from 'src/app/_models/post.model';
import { AngularFireAuth } from '@angular/fire/compat/auth';
// import { Comment } from 'src/app/_models/comment.model';
import {  Observable } from 'rxjs';
import { FormGroup, FormBuilder } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ProviderAstType } from '@angular/compiler';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import { async } from '@firebase/util';




@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  userID: string | null = '';
  editPostForm!: FormGroup;
  newID: string = '';
  person!: User | any;
  posts!: Post | any;
  friends: any;
  conn: any;
  arr:any=[];
comments:any=[];
// postID:string="";
count:any;
like:any=0;
likes:boolean=true;

  constructor( private router: Router,private user: UserServiceService, private fire: AngularFirestore, private postService: PostServiceService, private adAuth: AngularFireAuth, private fb: FormBuilder,private modalService: NgbModal,) { }

  ngOnInit(): void {
    this.userID = localStorage.getItem('token');
    if (this.userID) {
      this.newID = this.userID;
    }
    this.user.getuserDoc(this.newID).subscribe(res => {
      this.person = res.payload.data();
    });


    this.postService.getAllPosts().subscribe(res=>{
      res.forEach((res1)=>{
        let x: any = res1.data();
        x["idi"]=res1.id;
        this.fire.collection("Posts").doc(x.idi).update(x);
        if(x.ID==this.userID){
          this.arr.push(x);

        }
        console.log(this.arr);

      })
    });
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

    this.fire.collection("comment").snapshotChanges().subscribe(res=>{
      res.forEach(res1=>{
        let x:any=res1.payload.doc.data();
        let idd:string= res1.payload.doc.id;
        let commentt={...x,idd};
       this.comments.push(commentt);
        console.log(this.comments);
        console.log(x);
        console.log(commentt)

      })
    })
    this.editPostForm = this.fb.group({
      id: [''],
      body: ['']
    });

  }

  // onPost(form: Post) {
  //   this.postService.createPost({ like:0,comments:0, ID: this.person.ID, Name: this.person.firstName, img: this.person.img, title: this.person.jobTitle, time: new Date().toLocaleString(), ...form });
  // }

  onPost(form: Post) {
    this.postService.createPost({like:this.like, comments:0, ID: this.person.ID, Name: this.person.firstName, img: this.person.img, title: this.person.jobTitle, time: new Date().toLocaleString(), ...form });
  }



  onLike(id:any){
    var span = document.getElementById("likeID")

    // if(span?.innerHTML=='like'){
      if(this.like==0){
    this.fire.collection("Posts").doc(id).get().subscribe((res)=>{
      let x:any=res.data()
      console.log(x.like)
      x.like=1
      this.like=1
      console.log(x.like)


    this.fire.collection("Posts").doc(id).update(x);
    this.likes=false
    })

  }
  // else if(span?.innerHTML=='unlike'){
    else if(this.like==1){
    this.fire.collection("Posts").doc(id).get().subscribe((res)=>{
      let x:any=res.data()
      x.like=0
      this.like=0
      console.log(x.like)


    this.fire.collection("Posts").doc(id).update(x);
    this.likes=true;
    })
  }
  }







 onPostt(form:any,id:any) {
if(form.body!==""){

  this.fire.collection("comment").add({ID:this.person.ID,Name:this.person.firstName,IDD:id,img:this.person.img,...form});
}
this.fire.collection("Posts").doc(id).get().subscribe((res)=>{
  let x:any=res.data()
  x.comments++


this.fire.collection("Posts").doc(id).update(x);
this.reloadComponent();
})

	}


  openModal(targetModal: any, post: Post) {
    this.modalService.open(targetModal, {
      centered: true,
      backdrop: 'static'
    });

    this.editPostForm.patchValue({
      body: post.body,
      id: post.idi,
    });
  }

  onSubmit() {
    this.modalService.dismissAll();
    let formData: any = this.editPostForm.getRawValue();
    this.postService.updatePost(formData.id, formData.body);
  }

  deletePost(postID: string) {

    this.postService.deletePost(postID);

  }
  deleteCommentt(commentID: string,postID:string) {

		this.fire.collection("comment").doc(commentID).delete();

    this.fire.collection("Posts").doc(postID).get().subscribe((res)=>{
      let post:any=res.data()
      post.comments--


    this.fire.collection("Posts").doc(postID).update(post);
    this.reloadComponent();
    })

    console.log(commentID)
    console.log(commentID)
	}




  reloadComponent() {
    let currentUrl = this.router.url;
        this.router.routeReuseStrategy.shouldReuseRoute = () => false;
        this.router.onSameUrlNavigation = 'reload';
        this.router.navigate([currentUrl]);
    }
}
