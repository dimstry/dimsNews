import {
    Card,
    Carousel
} from "react-daisyui";

import "../App.css";


function ContentHead() {
    return(
        <div className="md:flex gap-3">
            <div className="md:flex-1">
                <Card style={{ width: '100%', cursor: 'pointer'}} >
                    <div className="card">
                        <Card.Image
                            src="https://images.unsplash.com/photo-1629131726692-1accd0c53ce0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                            alt="Shoes"
                            className="card_image"
                        />
                    </div>
                    <Card.Body className="card_body">
                        <Card.Title tag="h2">Shoes!</Card.Title>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                    </Card.Body>
                </Card>
            </div>
            <div className="contents">
                <div className="md:flex-1">
                    <Card style={{ width: '100%', cursor: 'pointer'}} >
                        <div className="card">
                            <Card.Image
                                src="https://images.unsplash.com/photo-1629131726692-1accd0c53ce0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                                alt="Shoes"
                                className="card_image"
                            />
                        </div>
                        <Card.Body className="card_body">
                            <Card.Title tag="h2">Shoes!</Card.Title>
                            <p>If a dog chews shoes whose shoes does he choose?</p>
                        </Card.Body>
                    </Card>
                </div>
                <div className="md:flex-1">
                    <Card style={{ width: '100%', cursor: 'pointer'}} >
                        <div className="card">
                            <Card.Image
                                src="https://images.unsplash.com/photo-1629131726692-1accd0c53ce0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                                alt="Shoes"
                                className="card_image"
                            />
                        </div>
                        <Card.Body className="card_body">
                            <Card.Title tag="h2">Shoes!</Card.Title>
                            <p>If a dog chews shoes whose shoes does he choose?</p>
                        </Card.Body>
                    </Card>
                </div>
                <div className="md:flex-1">
                    <Card style={{ width: '100%', cursor: 'pointer'}} >
                        <div className="card">
                            <Card.Image
                                src="https://images.unsplash.com/photo-1629131726692-1accd0c53ce0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                                alt="Shoes"
                                className="card_image"
                            />
                        </div>
                        <Card.Body className="card_body">
                            <Card.Title tag="h2">Shoes!</Card.Title>
                            <p>If a dog chews shoes whose shoes does he choose?</p>
                        </Card.Body>
                    </Card>
                </div>
            </div>
            <div className="md:flex-1">
                <Card style={{ width: '100%', cursor: 'pointer'}} >
                    <div className="card">
                        <Card.Image
                            src="https://images.unsplash.com/photo-1629131726692-1accd0c53ce0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                            alt="Shoes"
                            className="card_image"
                        />
                    </div>
                    <Card.Body className="card_body">
                        <Card.Title tag="h2">Shoes!</Card.Title>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                    </Card.Body>
                </Card>
            </div>
        </div>
        
    )
}
export default ContentHead;