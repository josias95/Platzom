//echo \"Error: no test specified\" && exit 1
const expect = require("chai").expect
const platzom = require("..").default

describe("#platzom", function(){
	it("si la palabra termina con ar, se le quita esos dos caracteres", function(){
		const translation = platzom("programar")
		expect(translation).to.equal("program")
	})

	it("Si la palabra inicia con Z se le añade pe al final", function(){
		const translation = platzom("zorro")
		const translation2 = platzom("zarpar")

		expect(translation).to.equal("zorrope")
		expect(translation2).to.equal("zarppe")


	})

	it("si la palabra tiene 10 o mas letras, se debe partir a la mitad y unir con un guion", function(){
		const translation = platzom("abecedario")
		expect(translation).to.equal("abece-dario")
	})

	it("si la palabra es una palindromo, ninguna regla anterior cuenta y se devuelve la misma palabra intercalando mayusculas y minusculas", function(){
		const translation = platzom("sometemos")
		expect(translation).to.equal("SoMeTeMoS")	
	})
})