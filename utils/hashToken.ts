import crypto from "crypto";
import bcrypt from "bcrypt";

const saltRounds = 12;

function hashToken(password:String) {
	// return crypto.createHash('sha512').update(password).digest('hex')
	let isHashed = null;
	bcrypt.genSalt(saltRounds, function (err, salt) {
		bcrypt.hash(password, salt, function (err, hash) {
			isHashed = hash;
		});
	});

	return isHashed;
}

export default hashToken
