import { User } from '@prisma/client'
import jwt from 'jsonwebtoken'
function generateAccessToken(data:Partial<User>){
    return jwt.sign({
        role:data.role,
        userId:data.id
    },process.env.JWT_ACCESS_SECRET,{
        expiresIn:'24h'
    })
}

function generateRefreshToken(data:Partial<User>){
    return jwt.sign({
        role:data.role,
        userId:data.id
    },process.env.JWT_REFRESH_SECRET,{
        expiredIn:'365d'
    })
}


function generateTokens(data:Partial<User>){
    const accessToken = generateAccessToken(data)
    const refreshToken = generateRefreshToken(data)

    return{
        accessToken,
        refreshToken
    }
}


module.exports = {
    generateAccessToken,
    generateRefreshToken,
    generateTokens
}