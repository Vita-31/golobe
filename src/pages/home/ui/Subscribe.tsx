import { FC } from 'react';
import { Input } from '../../../shared/components/ui/Input';
import { Button } from '../../../shared/components/ui/button/Button';
import MailBox from '@/assets/img/mailbox.webp';

interface SubscribeProp {}

export const Subscribe: FC<SubscribeProp> = () => {
  return (
    <section className="container relative">
      <div className="absolute bottom-[-50%] left-4 right-4 flex translate-y-[50%] justify-between gap-10 rounded-[20px] bg-primary-light p-6">
        <div className="max-w-[595px]">
          <h2 className="mb-6 max-w-[365px] text-[45px] font-bold leading-tight">
            Subscribe Newsletter
          </h2>
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
              />
              <Button color="dark" size="lg" variant="filled" bg="dark">
                Subscribe
              </Button>
            </div>
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
          className="mb-[-24px] hidden h-[305px] w-[400px] lg:block"
        />
      </div>
    </section>
  );
};
