type BasicProfileCardProps = {
  type: 'basic';
  name: string;
};

type AdvancedProfileCardProps = {
  type: 'advanced';
  name: string;
  email: string;
};

type ProfileCardProps = BasicProfileCardProps | AdvancedProfileCardProps;

function Component(props: ProfileCardProps) {
  const { type, name } = props;

  if (type === 'basic') {
    return (
      <div className="alert alert-danger">
        <h2>name : {name}</h2>
      </div>
    );
  } else if (type === 'advanced') {
    const { email } = props;
    return (
      <div className="alert alert-success">
        <h2>name : {name}</h2>
        <h2>email : {email}</h2>
      </div>
    );
  }
}

export default Component;
