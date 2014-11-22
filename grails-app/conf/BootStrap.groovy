import grails.converters.JSON

import com.mockcheck.exam.*
import com.mockcheck.exam.auth.*

class BootStrap {

	def init = { servletContext ->
		def adminRole = new Authority(authority: 'ROLE_ADMIN').save(flush: true)
		def userRole = new Authority(authority: 'ROLE_USER').save(flush: true)
		def testUser = new Person(username: 'me', password: 'password')
		testUser.save(flush: true)

		PersonAuthority.create testUser, adminRole, true

		assert Person.count() == 1
		assert Authority.count() == 2
		assert PersonAuthority.count() == 1

		JSON.registerObjectMarshaller(Question) { Question question ->
			return [
					id: question.id,
					index : question.index,
					status : question.status,
					statement : question.statement,
					options: question.options.collect{ OptionItem item ->
						[index: item.index, statement: item.option]
					}
				]
		}
		
		JSON.registerObjectMarshaller(QuestionPaper) { QuestionPaper paper ->
			return [
					id: paper.id,	
					index : paper.index,
					title : paper.title,
					questions: paper.questions.collect{ Question question ->
						[id: question.id, index: question.index, status: question.status]
					}
				  ]
	
		}
		
	/*	for(i in 1..40) {
			new Question(id: i, index: i, status: 'q-not-visited', statement: 'n/a').save(failOnError: true)
		}*/
		
		if(QuestionPaper.count() == 0) {
			new QuestionPaper(index: 1, title: "General Awareness").save(failOnError: true)
			new QuestionPaper(index: 2, title: "English Language").save(failOnError: true)
			new QuestionPaper(index: 3, title: "Reasoning").save(failOnError: true)
			new QuestionPaper(index: 4, title: "Quantitative Aptitude").save(failOnError: true)
			new QuestionPaper(index: 5, title: "Computer & Marketing Knowledge").save(failOnError: true)
		}
		
		if(Question.count() == 0) {
			
			new Question(
			index: 1,
			subjectId: 1,
			status: 'q-not-visited',
			statement: "What should come in place of the question mark (?) in the following equation? 45% of 1,500 + 35% of 1,700 = ?% of 3175",
			options: [new OptionItem(index: "a", option : "20"),new OptionItem(index: "b", option : "30"),new OptionItem(index: "c", option : "50"),new OptionItem(index: "d", option : "70"), new OptionItem(index: "e", option : "None of these")]
			).save(failOnError: true)
			
			new Question(
			index: 2,
			subjectId: 1,
			status: 'q-not-visited',
			statement: "Suresh bought 20 dozens of toys at the rate of Rs. 260 per dozen. He spent Rs. 340 on transportation. He added 10% overhead on the total money he spent. Approximately at what price per dozen should he sell the toys to make 32% profit?",
			options: [new OptionItem(index: "a", option : "410"),new OptionItem(index: "b", option : "425"),new OptionItem(index: "c", option : "400"),new OptionItem(index: "d", option : "600"),new OptionItem(index: "e", option : "None of these")]
			).save(failOnError: true)
			
			new Question(
			index: 3,
			subjectId: 1,
			status: 'q-not-visited',
			statement: "The average collection of a shop for a week was Rs. 7,224/-. The average collection for six days except Friday was Rs. 7,094/-. What was the collection on Friday?",
			options: [new OptionItem(index: "a", option : "9004"),new OptionItem(index: "b", option : "8004"),new OptionItem(index: "c", option : "9100"),new OptionItem(index: "d", option : "Data Inadequate"), new OptionItem(index: "e", option : "None of these")]
			).save(failOnError: true)
			
			new Question(
			index: 4,
			subjectId: 1,
			status: 'q-not-visited',
			statement: "Four of the five parts are exactly equal. Which of the parts is not equal. The option of that part is the answer.",
			options: [new OptionItem(index: "a", option : "a(exp2) (a - b) - a(exp3) (1 - 2ab) ="),new OptionItem(index: "b", option : "a(exp2)b (a(exp2) - 1) + a(exp4)b ="),new OptionItem(index: "c", option : "3a(exp4)b - a(exp2)b - a(exp4)b ="),new OptionItem(index: "d", option : "(a(exp2) - b) (a(exp2) + b) + 2a(exp4)b ="), new OptionItem(index: "e", option : "ab (a(exp3) - 3b + 2a) - 3ab (a -b) + a(exp4)b=")]
			).save(failOnError: true)
			
			new Question(
			index: 5,
			subjectId: 1,
			status: 'q-not-visited',
			statement: "If √(2exp(x)) = 64, what will be the value of X?",
			options: [new OptionItem(index: "a", option : "15"),new OptionItem(index: "b", option : "6"),new OptionItem(index: "c", option : "14"),new OptionItem(index: "d", option : "12"),new OptionItem(index: "e", option : "None of these")]
			).save(failOnError: true)
			
			new Question(
			index: 6,
			subjectId: 1,
			status: 'q-not-visited',
			statement: "The LCM and HCF of two numbers are 72 and 6, respectively. If one number is 3/4 of the other, which is the greater number?",
			options: [new OptionItem(index: "a", option : "15"),new OptionItem(index: "b", option : "16"),new OptionItem(index: "c", option : "18"),new OptionItem(index: "d", option : "20"),new OptionItem(index: "e", option : "24")]
			).save(failOnError: true)
			
			new Question(
			index: 7,
			subjectId: 1,
			status: 'q-not-visited',
			statement: "Suresh and Mahesh entered into a partnership investing Rs. 16,000 and Rs. 12,000 respectively. After two months, Naresh joined them with an investment of Rs. 20,000. Find the share of Naresh in an half-yearly profit of Rs. 15,500?",
			options: [new OptionItem(index: "a", option : "3800"),new OptionItem(index: "b", option : "6000"),new OptionItem(index: "c", option : "5000"),new OptionItem(index: "d", option : "6500"),new OptionItem(index: "e", option : "None of these")]
			).save(failOnError: true)
			
			new Question(
			index: 8,
			subjectId: 1,
			status: 'q-not-visited',
			statement: "Two candidates were contesting for the post of the Chairperson of a Committee. 3/4 th of the members voted for A and 3/5 th for B. 30 members voted in favour of both the candidates and 9 members did not cast their vote. Find the total number of members who cast their votes.",
			options: [new OptionItem(index: "a", option : "60"),new OptionItem(index: "b", option : "80"),new OptionItem(index: "c", option : "57"),new OptionItem(index: "d", option : "51"),new OptionItem(index: "e", option : "None of these")]
			).save(failOnError: true)
		
			new Question(
			index: 9,
			subjectId: 1,
			status: 'q-not-visited',
			statement: "A solution of sugar syrup has 15% sugar. Another solution has 5% sugar. How many litres of the second solution must be added to 20 litres of the first solution to make a solution of 10% sugar?",
			options: [new OptionItem(index: "a", option : "10"),new OptionItem(index: "b", option : "5"),new OptionItem(index: "c", option : "15"),new OptionItem(index: "d", option : "20"),new OptionItem(index: "e", option : "None of these")]
			).save(failOnError: true)
			
			new Question(
			index: 10,
			subjectId: 1,
			status: 'q-not-visited',
			statement: "Sunil left for city 'X' from city 'Y' at 5.50 a.m. He travelled at the speed of 80 km/hr for 2 hours, 15 minutes. After that, the speed was reduced to 60 km/hr. If the distance between the two cities is 350 kms. At what time did Sunil reach city 'Y' ?",
			options: [new OptionItem(index: "a", option : "10:05 a.m."),new OptionItem(index: "b", option : "10:35 a.m."),new OptionItem(index: "c", option : "9:50 a.m."),new OptionItem(index: "d", option : "10:50 a.m."),new OptionItem(index: "e", option : "None of these")]
			).save(failOnError: true)

		}

	}

	def destroy = {
	}
}
