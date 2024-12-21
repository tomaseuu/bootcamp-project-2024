
import { NextRequest, NextResponse } from 'next/server'
import connectDB from "@/database/db"
import portfolioSchema from "@/database/portfolioSchema"

type IParams = {
		params: {
			slug: string
		}
}

// If { params } looks confusing, check the note below this code block
export async function GET(req: NextRequest, { params }: IParams) {
    await connectDB() // function from db.ts before
		const { slug } = params // another destructure

	   try {
	        const portfolio = await portfolioSchema.findOne({ slug }).orFail()
	        return NextResponse.json(portfolio)
	    // eslint-disable-next-line @typescript-eslint/no-unused-vars
	    } catch (err) {
	        return NextResponse.json('Blog not found.', { status: 404 })
	    }
}
