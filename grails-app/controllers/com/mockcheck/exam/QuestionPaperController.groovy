package com.mockcheck.exam

import grails.converters.JSON
import grails.rest.RestfulController

import org.bson.types.ObjectId

class QuestionPaperController extends RestfulController{

	static responseFormats = ['json', 'html']
	
	QuestionPaperController() {
		super(QuestionPaper)
	}
		
    def index() {
		List papers = QuestionPaper.list()
/*		List questions = Question.findAll()
		for(paper in papers) {
			paper.questions = questions
		}*/
		def jsonTests = [papers:papers]
		render jsonTests as JSON
	}
	
	def show(QuestionPaper paper) {
		//def paper = QuestionPaper.findById(new ObjectId("5438f0de4e424bf87fc23217"))
		paper.questions = Question.list()
		/*def questions = paper.questions
		questions.first().setStatus('q-attempted')
		questions.first().save()*/
		respond paper
	}
}
