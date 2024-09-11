import useClipboardCopy from '../../../utils/hooks/useClipboardCopy';
import Button from '../../ui/Button';

interface Props {
  value: string;
}
export default function TextCopyButton({ value }: Props) {
  const { copy, isPaused } = useClipboardCopy(2000);

  const label = isPaused ? 'Copied' : 'Copy';

  const clickHandler = () => {
    copy(value);
  };

  return (
    <Button type="button" disabled={isPaused} onClick={clickHandler}>
      {label}
    </Button>
  );
}
