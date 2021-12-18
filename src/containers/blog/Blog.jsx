import React from 'react';
import Article from '../../components/article/Article';
import { blog01, blog02, blog03, blog04, blog05 } from './imports';
import './blog.css';

const Blog = () => (
  <div className="gpt3__blog section__padding" id="affliate">
    <div className="gpt3__blog-heading">
      <h1 className="gradient__text">Earn money online, <br />anytime and in any place you want!</h1>
    </div>
    <div className="gpt3__blog-container">
      <div className="gpt3__blog-container_groupA">
<<<<<<< HEAD
        <Article imgUrl={blog01}  text="QUALITY MANAGEMENT" text2="To maintain the quality of delivered leads and sales at a high level a dedicated and highly-qualified account manager will be assigned to manage your project and report to you on a daily, weekly and monthly basis."/>
      </div>
      <div className="gpt3__blog-container_groupB">
        <Article imgUrl={blog02}  text="DEDICATED ACCOUNT MANAGER" text2="Earn money online, anytime and in any place you want! We have the most profitable program of 2021. With no experience needed. All you need is a cell phone.Takes only3-10 minutes to complete a simple task and earn 15% of the principal amount plus commission to earn." />{ /*date="Sep 26, 2021"*/ }
        <Article imgUrl={blog03}  text="PAY PER PERFORMANCE" text2="LTPLDIGITAL is the best Affiliate network which provides result-oriented services to our clients. We charge only when the suggested action plan is successfully implemented."  />
        <Article imgUrl={blog04}  text="LEAD GENERATION" text2="Our lead generation platform helps to connect with the right customer. We always focus on the quality of leads and coordinate our activities with the client regularly for the feedback to optimise & scale." />
        <Article imgUrl={blog05}  text="TARGETED TRAFFIC" text2="We are one of the best targeted traffic provider companies in the world because our expert affiliate managers select the best affiliates according to your campaign requirements." />
        
=======
        <Article imgUrl={blog01}  text="How Does CPA Marketing Work?" text2="Earn money online, anytime and in any place you want!

We have the fastest way to earn the money even if you are at home! <br>We have the most profitable program of 2021. With no experience needed. All you need is a cell phone.Takes only3-10 minutes to complete a simple task and earn 15% of the principal amount plus commission to earn. "/>
      </div>
      <div className="gpt3__blog-container_groupB">
        <Article imgUrl={blog02}  text="Pay Per Click (CPC) Affiliate Programs (2021)" text2="Earn money online, anytime and in any place you want! <br>We have the most profitable program of 2021. With no experience needed. All you need is a cell phone.Takes only3-10 minutes to complete a simple task and earn 15% of the principal amount plus commission to earn." />{ /*date="Sep 26, 2021"*/ }
        <Article imgUrl={blog03}  text="Pay Per Click (CPS) Affiliate Programs (2021)" text2="Earn money online, anytime and in any place you want! We have the most profitable program of 2021. With no experience needed. All you need is a cell phone.Takes only3-10 minutes to complete a simple task and earn 15% of the principal amount plus commission to earn."  />
        <Article imgUrl={blog04}  text="Pay Per Click (CPL) Affiliate Programs (2021)" text2="Earn money online, anytime and in any place you want! We have the most profitable program of 2021. With no experience needed. All you need is a cell phone.Takes only3-10 minutes to complete a simple task and earn 15% of the principal amount plus commission to earn." />
        <Article imgUrl={blog05}  text="Pay Per Click (CPD) Affiliate Programs (2021)" text2="Earn money online, anytime and in any place you want! We have the most profitable program of 2021. With no experience needed. All you need is a cell phone.Takes only3-10 minutes to complete a simple task and earn 15% of the principal amount plus commission to earn." />
>>>>>>> 9cc6d4455690b7e567425e2116a5e0072ffbc7f5
      </div>
    </div>
  </div>
);

export default Blog;