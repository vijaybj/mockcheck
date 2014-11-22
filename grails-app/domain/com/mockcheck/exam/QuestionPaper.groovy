package com.mockcheck.exam

import org.bson.types.ObjectId

class QuestionPaper {
	String id
	Integer index
	String title
	List questions = []
	
	//static embedded = ['question', 'questions']
	//static hasMany = [questions: Question]
	//static mapping = { childs lazy: false }*/
}
