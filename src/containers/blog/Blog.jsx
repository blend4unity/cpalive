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
        <Article imgUrl={blog01}  text="How Does CPA Marketing Work?" text2="Earn money online, anytime and in any place you want!

We have the fastest way to earn the money even if you are at home! <br>We have the most profitable program of 2021. With no experience needed. All you need is a cell phone.Takes only3-10 minutes to complete a simple task and earn 15% of the principal amount plus commission to earn. "/>
      </div>
      <div className="gpt3__blog-container_groupB">
        <Article imgUrl={blog02}  text="Pay Per Click (CPC) Affiliate Programs (2021)" text2="Earn money online, anytime and in any place you want! <br>We have the most profitable program of 2021. With no experience needed. All you need is a cell phone.Takes only3-10 minutes to complete a simple task and earn 15% of the principal amount plus commission to earn." />{ /*date="Sep 26, 2021"*/ }
        <Article imgUrl={blog03}  text="Pay Per Click (CPS) Affiliate Programs (2021)" text2="Earn money online, anytime and in any place you want! We have the most profitable program of 2021. With no experience needed. All you need is a cell phone.Takes only3-10 minutes to complete a simple task and earn 15% of the principal amount plus commission to earn."  />
        <Article imgUrl={blog04}  text="Pay Per Click (CPL) Affiliate Programs (2021)" text2="Earn money online, anytime and in any place you want! We have the most profitable program of 2021. With no experience needed. All you need is a cell phone.Takes only3-10 minutes to complete a simple task and earn 15% of the principal amount plus commission to earn." />
        <Article imgUrl={blog05}  text="Pay Per Click (CPD) Affiliate Programs (2021)" text2="Earn money online, anytime and in any place you want! We have the most profitable program of 2021. With no experience needed. All you need is a cell phone.Takes only3-10 minutes to complete a simple task and earn 15% of the principal amount plus commission to earn." />
      </div>
    </div>
  </div>
);

export default Blog;