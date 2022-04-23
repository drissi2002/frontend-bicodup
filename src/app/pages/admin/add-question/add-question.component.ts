import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuizService } from 'src/app/services/quiz.service';
import Swal from 'sweetalert2';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';

@Component({
  selector: 'app-add-question',
  templateUrl: './add-question.component.html',
  styleUrls: ['./add-question.component.css']
})
export class AddQuestionComponent implements OnInit {
  public Editor = ClassicEditor;
  idquiz:any;
  qTitle:any;
  question={
    quiz:{},
    content:'',
    option1:'',
    option2:'',
    option3:'',
    option4:'',
    answer:'',
  };
  /*
  constructor(
    private _route:ActivatedRoute,
    private _quiz:QuizService,
    ) { }*/

  ngOnInit(): void {/*
    this.idquiz= this._route.snapshot.params.idquiz;
    this.qTitle= this._route.snapshot.params.title;
    this.question.quiz['idquiz'] = this.idquiz;
    */
  }
  formSubmit(){/*
    if(this.question.content.trim()==''|| this.question.content==null)
    {
      return ;
    }
    if(this.question.option1.trim()==''|| this.question.option1==null)
    {
      return ;
    }
    if(this.question.option2.trim()==''|| this.question.option2==null)
    {
      return ;
    }
    if(this.question.answer.trim()==''|| this.question.answer==null)
    {
      return ;
    }
    //form submit
    
    this._quiz.addQuiz(this.question).subscribe ((data:any)=>
     {
        Swal.fire("Success","Question Added. Add Another one",'success');
        this.question.content=''
        this.question.option1=''
        this.question.option2=''
        this.question.option3=''
        this.question.option4=''
        this.question.answer=''
      },
      (error:any)=>{
        Swal.fire('Error','Error in adding question','error');
      }
    );*/
  }

}
