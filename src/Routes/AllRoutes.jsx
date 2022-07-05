import React from 'react'
import { Route, Routes } from 'react-router'
import { AllRegisteredBooks } from './AllRegisteredBooks'
import { AuthorRegistrationPage } from './AuthorRegistrationPage'
import { BookRegistrationPage } from './BookRegistrationPage'
import { Home } from './Home'
import { LoginPage } from './LoginPage'
import { NoRoute } from './NoRoute'
import { ProofingBook } from './ProofingBook'
import { PublishedPage } from './PublishedPage'
import { PublisherRegistrationPage } from './PublisherRegistrationPage'
import { ReadyToPublish } from './ReadyToPublish'
import { ReviewBook } from './ReviewBook'

export const AllRoutes = () => {
  return (
    <div>
        <Routes>
            <Route path="/author_registration" element={<AuthorRegistrationPage />} />
            <Route path="/books" element={<AllRegisteredBooks />} />
            <Route path="/book_registration" element={<BookRegistrationPage />} />
            <Route path="/login" element={<LoginPage /> } />
            <Route path="/proofing" element={<ProofingBook />} />
            <Route path="/published/success" element={<PublishedPage />} />
            <Route path="/publisher_registration" element={<PublisherRegistrationPage />} />
            <Route path="/ready_to_publish" element={<ReadyToPublish /> } />
            <Route path="/review" element={<ReviewBook />} />
            <Route path="/" element={<Home />} />
            <Route path="*" element={<NoRoute />} />
        </Routes>
    </div>
  )
}
