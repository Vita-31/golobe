import { FC, useState } from 'react';
import { Input } from './Input';
import { Button } from './button/Button';
import MailBox from '@/assets/img/mailbox.webp';
// import { ErrorMessage } from './ErrorMessage';

interface SubscribeProp {}

export const Subscribe: FC<SubscribeProp> = () => {
  const [email, setEmail] = useState('');

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   console.log(email);
  // };

  // const errorText = 'some error text';

  return (
    <section className="container relative">
      <div className="subscribe bg-primary-light absolute left-4 right-4 flex justify-between gap-10 p-6">
        <div className="subscribe__content">
          <h2 className="title mb-6 font-bold leading-tight">Subscribe Newsletter</h2>
          <h3 className="mb-2 text-xl font-bold leading-5">The Travel</h3>
          <p className="mb-4 font-medium leading-5 opacity-70">
            Get inspired! Receive travel discounts, tips and behind the scenes stories.
          </p>
          <form>
            <div className="flex flex-col gap-4 md:flex-row">
              <Input
                placeholder="Your email address"
                className="border-white"
                type="email"
                name="email"
                borderColor="border-primary-light"
                onChange={(e) => setEmail(e.target.value.trim())}
              />
              <Button color="dark" size="lg" variant="filled">
                Subscribe
              </Button>
            </div>
            {/* <ErrorMessage text={errorText} /> */}
          </form>
        </div>

        <img
          src={MailBox}
          alt="mailbox"
          title="mailbox"
          width="1"
          height="1"
          decoding="async"
          loading="lazy"
          className="hidden lg:block"
        />
      </div>
    </section>
  );
};
