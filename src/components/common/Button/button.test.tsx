import {screen} from '@testing-library/dom';
import {render} from '@testing-library/react';
import {userEvent} from '@testing-library/user-event';

import Button from '@/components/common/Button/index';

describe('Button', () => {
  const user = userEvent.setup();

  it('버튼안에 택스트가 출력된다.', async () => {
    render(<Button text="버튼" />);

    const ButtonElement = screen.getByRole('button');

    expect(ButtonElement).toHaveTextContent('버튼');
  });

  it('버튼을 클릭하면 onClick 함수가 실행된다.', async () => {
    const mock = jest.fn();

    render(<Button text="버튼" onClick={mock} />);
    const ButtonElement = screen.getByRole('button');

    await user.click(ButtonElement);
    ButtonElement.click();

    expect(mock).toHaveBeenCalled();
  });

  it('버튼은 기본적으로 type1 스타일을 가진다.', async () => {
    render(<Button text="버튼" />);
    const ButtonElement = screen.getByRole('button');

    expect(ButtonElement).toHaveClass('type1');
  });

  it('버튼의 스타일을 type2로 변경할 수 있다.', async () => {
    render(<Button text="버튼" color="type2" />);
    const ButtonElement = screen.getByRole('button');

    expect(ButtonElement).toHaveClass('type2');
  });

  it('버튼은 엔터를 눌러 클릭할 수 있다.', async () => {
    const mock = jest.fn();

    render(<Button text="버튼" onClick={mock} />);
    const ButtonElement = screen.getByRole('button');

    await user.type(ButtonElement, '{enter}');

    expect(mock).toHaveBeenCalled();
  });
});
