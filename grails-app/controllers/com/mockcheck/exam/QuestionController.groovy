package com.mockcheck.exam

import grails.converters.JSON
import grails.rest.RestfulController

import org.bson.types.ObjectId

class QuestionController  extends RestfulController{
	static responseFormats = ['json', 'html']
	static allowedMethods = [save: "POST", update: "PUT", delete: "DELETE"]
	
	QuestionController() {
		super(Question)
	}
	
	def index = {
		List questions = Question.findAll()
		def jsonQuestions = [questions:questions]
		render jsonQuestions as JSON
	}
	
	def show(Question question) {
		//def question = Question.findById(new ObjectId("5438f0de4e424bf87fc2321c"))
		/*question.statement = "What should come in place of the question mark (?) in the following equation? 45% of 1,500 + 35% of 1,700 = ?% of 3175"
		question.options.add(new OptionItem(index: "a", statement : "20"))
		question.options.add(new OptionItem(index: "b", statement : "30"))
		question.options.add(new OptionItem(index: "c", statement : "50"))
		question.options.add(new OptionItem(index: "d", statement : "70"))
		question.options.add(new OptionItem(index: "e", statement : "None of these"))*/
		respond question
	}
	
	def update(Question question) {
		//def examStatus = session["examStatus"]
		//examStatus[""]
		//question.save(parametersToBind);
		//question.save()
		/*def question = Question.get(1)
		
		question.save(failOnError: true)*/
		//render question as JSON
		respond question
	}
}
