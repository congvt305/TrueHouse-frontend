import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { RoomService } from '../../service/room.service';
import { CommentServiceService } from '../../service/comment-service.service';
import { IComment } from '../../interface/i-comment';
import { UserService } from '../../service/user.service';
import { StarRatingComponent } from 'ng-starrating';

@Component({
    selector: 'app-comment',
    templateUrl: './comment.component.html',
    styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {
    formComment;
    idHouse;
    idUser = sessionStorage.getItem('token');
    users;
    commentAll;

    constructor(
        private fb: FormBuilder,
        private router: Router,
        private route: ActivatedRoute,
        private roomService: RoomService,
        private commentService: CommentServiceService,
        private userService: UserService
    ) {
    }

    ngOnInit(): void {
        this.commentService.getAll().subscribe(next => {
            // @ts-ignore
            this.commentAll = next.data;
        });
        this.userService.getAll().subscribe(next => {
            // @ts-ignore
            this.users = next.data;
        });
        this.idHouse = this.route.snapshot.paramMap.get('id');
        this.formComment = this.fb.group({
            content: [''], rating: ['']
        });
    }

    onSubmit(data) {
        const comment = {
            content: data.content,
            user_id: this.idUser,
            house_id: this.idHouse,
            rating: data.rating
        };
        if (!this.idUser) {
            alert('Bạn cần đăng nhập để bình luận');
        } else {
            this.commentService.createComment(comment).subscribe(next => {
                location.reload();
            });
        }
    }

    onRate($event: { oldValue: number, newValue: number, starRating: StarRatingComponent }) {
        alert(`Old Value:${$event.oldValue},
      New Value: ${$event.newValue},
      Checked Color: ${$event.starRating.checkedcolor},
      Unchecked Color: ${$event.starRating.uncheckedcolor}`);
    }

}
